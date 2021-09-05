import React from 'react'
import Layout from '../components/layout'

import Panel from "../components/panel";
import SEO from "../components/seo"

import MaxWidthContainer from '../components/MaxWidthContainer';
import { Button } from 'grommet';
import Projects from "../components/projects";
import ContactFrom from "../components/contactFrom";
import HomeHero from "../components/homeHero"
import Technologies from '../components/technologies';
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">

      <SEO 
        title="Forside" 
        description="Veldig viktig beskrivelse av hva vi gjør"
      />
                
      <HomeHero image={data.hero} /> 
      <Panel
        image={data.panelOne}
        title="Dette er en tittel!"
        text="Pellentesque fermentum rutrum est at iaculis. Morbi viverra diam vel dui auctor, et tempor arcu ornare. Fusce nec ipsum interdum ante placerat finibus. Aenean vitae facilisis nunc. Etiam molestie massa vel augue bibendum maximus. Curabitur dictum ante magna, id auctor quam varius sit amet. Praesent lacinia in lacus nec sollicitudin. Proin suscipit odio pretium, scelerisque sapien a, posuere quam."
      />

      <MaxWidthContainer pad={{bottom:"large"}} align="center" justify="center" direction="row" gap="medium" wrap="true">
        <Link to="/about"><Button label="Om Oss"/></Link>
        <Link to="/company"><Button label="For Bedrifter" primary /></Link>
      </MaxWidthContainer>

      <Technologies />
      <Projects posts={data.allMdx.nodes}/>
      <ContactFrom />

    </Layout>
  )
}


export const query = graphql`
  query {
    hero: file(relativePath: { eq: "droneTwo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 70) {
          ...GatsbyImageSharpFluid
          
        }
      }
    }
    panelOne: file(relativePath: { eq: "droneOne.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 70) {
          ...GatsbyImageSharpFluid
          
        }
      }
    }
    allMdx(sort: {fields: frontmatter___date, order: DESC} filter: {slug: {ne: "privacy"}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
       
          featuredimage {
          childImageSharp {
            fluid(quality: 70, maxWidth: 400) {
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

export default IndexPage

