import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import McHeader from '../components/Header'

import CustomTheme from "./customTheme"
import { Grommet } from 'grommet';

import Footer from "../components/Footer"
import "./styles.css"
/*

Til videre.. 
- legge til react helmet, for å kunne se hvilken side man er i tab
- Legge til bedre SAO?

*/

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Grommet theme={CustomTheme} lang="no">
      <McHeader siteTitle={data.site.siteMetadata.title} />
        
      {children}
      <Footer />
    </Grommet>
  )
}
export default Layout

