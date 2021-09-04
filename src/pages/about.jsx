import React from "react";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import Panel from "../components/panel"

import Layout from "../components/layout";

import { graphql } from "gatsby"

function About({ data }) {
    return(
        <Layout pageTitle="test">
        <Hero 
            title="Om oss" 
            image={data.hero}
            height="medium" 
        />
        <SEO 
            title="about"
            description="Dette er en beskrivese"
        />
         <Panel
                color="white"
                image={data.panelOne}
                title="Dette er en tittel!"
                text="Pellentesque fermentum rutrum est at iaculis. Morbi viverra diam vel dui auctor, et tempor arcu ornare. Fusce nec ipsum interdum ante placerat finibus. Aenean vitae facilisis nunc. Etiam molestie massa vel augue bibendum maximus. Curabitur dictum ante magna, id auctor quam varius sit amet. Praesent lacinia in lacus nec sollicitudin. Proin suscipit odio pretium, scelerisque sapien a, posuere quam."
            />
        </Layout>
    )
}

export const query = graphql`
  query {
    panelOne: file(relativePath: { eq: "droneOne.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 70) {
          ...GatsbyImageSharpFluid
          
        }
      }
    }
    hero: file(relativePath: { eq: "droneOne.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 70) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
  }
`

export default About