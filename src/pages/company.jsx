import React from "react";
import Hero from "../components/Hero";


import Panel from "../components/panel"
import ContactForm from "../components/contactFrom"

import Layout from "../components/layout";

import SEO from "../components/seo";

import { graphql } from "gatsby"

function Company({data}) {
    return(
        <Layout>
            <Hero 
              title="For selskaper" 
              image={data.hero}
              height="medium" 
            />
            <SEO 
              title="For selskaper"
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
    hero: file(relativePath: { eq: "droneThree.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 70) {
            ...GatsbyImageSharpFluid
            
          }
        }
    }
    panelOne: file(relativePath: { eq: "peopleOne.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 70) {
            ...GatsbyImageSharpFluid
            
          }
        }
      } 
  }
`

export default Company