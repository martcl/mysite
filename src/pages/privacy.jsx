import React from "react";
import Hero from "../components/Hero";

import Layout from "../components/layout";
import { graphql } from "gatsby"
import MaxWidthContainer from "../components/MaxWidthContainer";
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import SEO from "../components/seo";

function Privacy({data}) {
    return(
      <Layout>
        <Hero 
          title="Personvern" 
          image={data.hero}
          height="small" 
        />
        <SEO 
          title="Martin Bedrift Co" 
          description="Veldig viktig beskrivelse av hva vi gjør"
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
  query {
    hero: file(relativePath: { eq: "droneTwo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          
        }
      }
    }
    mdx(slug: {eq: "privacy"}) {
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



export default Privacy

