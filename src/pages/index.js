import React from 'react'
import Layout from '../components/layout'

import Panel from "../components/panel";
import SEO from "../components/seo"
import {Box} from "grommet"
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
        title="Vi utvikler"
        text={
          <span >
            Litenutvikler.no tilbyr konsulenttjenester til andre bedrifter og selskaper knyttet til utvikling av programmvare
            og webutvikling. Vi tar på oss nye utfordinger både innenfor ekspertområdene våre Pyton og Reactjs, men også 
            innenfor andre teknologier. <Link to="/contact"> Ta kontakt </Link> slik at vi kan løse utfordringen sammen!
          </span>
        }
      />

      <MaxWidthContainer pad={{bottom:"large"}} align="center" justify="center" direction="row" gap="medium" wrap={true}>
        <Link to="/about"><Button label="Om Oss"/></Link>
        <Link to="/company"><Button label="For Selskaper" primary /></Link>
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

