import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import McHeader from '../components/Header'

import CustomTheme from "./customTheme"
import { Grommet } from 'grommet';
import AlertMessage from "./alertMessage";
import Footer from "../components/Footer"
import "./styles.css"
/*

Til videre.. 
- legge til react helmet, for å kunne se hvilken side man er i tab
- Legge til bedre SAO?

*/

const Layout = ({ pageTitle, children }) => {
  const [value, setValue] = useState(false)

  const onClose = () => {
    sessionStorage.setItem("key", true)
    setValue(true)
  }
  useEffect(()=>{
    if(sessionStorage.getItem("key")){
      setValue(true)
    }
  })

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
    <Grommet theme={CustomTheme}>
      {!value && (
        <AlertMessage 
          onClose={() => onClose()} 
          message="-- Denne siden er under utvikling! -- \n den er ikke klar"
          color="status-critical"
          pos="bottom"
        />
      ) 
      }

      <McHeader siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
      
    </Grommet>
  )
}
export default Layout

