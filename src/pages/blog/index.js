import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

import Card from "../../components/card"
import MaxWidthContainer from '../../components/MaxWidthContainer'

import { Grid,Box, ResponsiveContext, Heading } from "grommet"

const isMobile = (size) => size === "xsmall" || size === "small"

const BlogPage = ({ data }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Layout pageTitle="My Blog Posts">
      <MaxWidthContainer>
        <Heading level="2">Eldre inlegg</Heading>
        <ResponsiveContext.Consumer> 
          {size => (
            
            <Grid columns={isMobile(size)?"medium":"1/2"} gap="medium">
            {
              data.allMdx.nodes.map(post => (
                <Box alignSelf="center" fill="vertical" justify="start" key={post.id}> 
                  <Card post={post} key={post.id} />
                  
                </Box>
              ))
            }
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </MaxWidthContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC} ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
       
          featuredimage {
          childImageSharp {
            fluid(quality: 50, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      slug
      timeToRead
      id
    }
  }
}
`

export default BlogPage