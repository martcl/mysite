import React from "react";
import Hero from "../components/Hero";


import Panel from "../components/panel"
import ContactForm from "../components/contactFrom"

import Layout from "../components/layout";

import Drone from "../images/droneOne.jpg"

import { graphql } from "gatsby"

function Contact({data}) {
    return(
        <Layout>
            <Hero 
                title="Kontakt oss!" 
                image={data.hero}
                height="medium" 
            />
            <Panel
                color="white"
                image={data.panelOne}
                title="Dette er en tittel!"
                text="Pellentesque fermentum rutrum est at iaculis. Morbi viverra diam vel dui auctor, et tempor arcu ornare. Fusce nec ipsum interdum ante placerat finibus. Aenean vitae facilisis nunc. Etiam molestie massa vel augue bibendum maximus. Curabitur dictum ante magna, id auctor quam varius sit amet. Praesent lacinia in lacus nec sollicitudin. Proin suscipit odio pretium, scelerisque sapien a, posuere quam."
            />
            
            <ContactForm />
        </Layout>
        
    )
}


export const query = graphql`
  query {
    hero: file(relativePath: { eq: "peopleTwo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 70) {
            ...GatsbyImageSharpFluid
            
          }
        }
    }
    panelOne: file(relativePath: { eq: "droneThree.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            
          }
        }
      } 
  }
`

export default Contact