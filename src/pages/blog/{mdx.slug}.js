import * as React from 'react'
import { graphql } from 'gatsby' // highlight-line
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import Hero from '../../components/Hero'
import MaxWidthContainer from '../../components/MaxWidthContainer'

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Hero 
        image={data.mdx.frontmatter.featuredimage}
        height="medium"
      />
      <MaxWidthContainer>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </MaxWidthContainer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        featuredimage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default BlogPost