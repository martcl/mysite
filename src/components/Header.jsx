
import React from "react"
import { Box, Text, Button, ResponsiveContext, Layer, Heading } from "grommet"

import { Close, Menu as MenuOpenIcon } from "grommet-icons"

import  { Link, graphql, useStaticQuery } from 'gatsby'

import Img from "gatsby-image"
import MaxWidthContainer from "./MaxWidthContainer"
import HideOnPrintBox from "./HideOnPrintBox"

import { LayoutSEO } from "./seo"
const isMobile = (size) => size === "xsmall" || size === "small"


function ResponsiveMenu ({ isMobile, items }) {
  const [show, setShow] = React.useState();

  if (isMobile)
    return (
      <Box>
        <Button label="Meny" onClick={() => setShow(true)} icon={ <MenuOpenIcon />}  reverse={true} plain/>
        {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
              background="light-1"
              responsive={false}
              position="right"
              full="vertical"
            >
              <Box>
              <Button 
                margin={{bottom:"medium", right:"xsmall", top:"xsmall"}} 
                color="brand"
                alignSelf="end"
                icon={<Close color="brand"/>}
                onClick={() => setShow(false)}
              />
              <Box pad={{horizontal:"xlarge"}}>
                 {items.map((item)=>(
                   <Link to={item.to} key={item.to}>
                    <Box margin={{vertical:"medium"}}>
                     <Text alignSelf="center">
                      {item.label}
                     </Text>
                   </Box>
                 </Link>
                 ))}
                 </Box>
               </Box>
            </Layer>
         
        )}
      </Box>
    )
  return items.map((item) => (
    <Box key={item.to}>
      <Link to={item.to} >
        <Box margin={{horizontal:"small"}} key={item.to}>
          {item.to === "/"?  
            <Text color="white" style={{borderBottom: "2px solid rgb(100, 137, 221)"}}>
            {item.label}
            </Text>
          : 
            <Text color="white">
            {item.label}
            </Text>
          }
        </Box>
      </Link>
    </Box>
  ))
}


function McHeader ({ siteTitle}){
  const size = React.useContext(ResponsiveContext)
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq:"icons/myLogo.png"}) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 10) {
          ...GatsbyImageSharpFluid
          
         }
        }
      }
    }
  `)
  return(
    <>
    <LayoutSEO siteTitle={siteTitle} />
    <Box background="rgb(5,25,42)" pad={{ vertical: "small" }}>
      <MaxWidthContainer>
            <Box direction="row" gap="small">
            <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                <Box direction="row" gap="small">
                    <Box width="xxsmall">
                      <Img fluid={data.file.childImageSharp.fluid}/>
                    </Box>
                    <Box justify="center">
                    <Heading level="2" margin="0">{siteTitle}</Heading>
                    </Box>
                </Box>
              </Link>
              <HideOnPrintBox
                direction="row"
                alignSelf="center"
                margin={{ left: "auto" }}
              >
                <ResponsiveMenu
                  isMobile={isMobile(size)}
                  items={[
                    {
                      label: "Om oss",
                      to:"/about",
                    },
                    {
                      label: "Kontaktinfo",
                      to: "/contact",
                    },
                    {
                      label: "For selskaper",
                      to: "/company",
                    },
                  ]}
                />
              </HideOnPrintBox>
            </Box>
      </MaxWidthContainer>
      
    </Box>
    </>

  )
  
}




export default McHeader
