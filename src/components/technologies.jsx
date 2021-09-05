import React from "react";
import { Box } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import MaxWidthContainer from "./MaxWidthContainer";
function Technologies(){
    const data = useStaticQuery(graphql`
    query {
        gatsby: file(relativePath: {eq:"icons/gatsby.png"}) {
            childImageSharp {
                fluid(maxWidth: 150, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        python: file(relativePath: {eq:"icons/python.png"}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        react: file(relativePath: {eq:"icons/react.png"}) {
            childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        grommet: file(relativePath: {eq:"icons/grommet.svg"}) {
            publicURL
        }
    }
  `)
    return(
        <Box background="light-1" pad="small">
            <MaxWidthContainer direction="row" wrap="true" gap="small" align="center" justify="center" > 
                <Box width="small">
                    <Img fluid={data.gatsby.childImageSharp.fluid}  />
                </Box>
                <Box width="xsmall">
                    <Img fluid={data.python.childImageSharp.fluid} />
                </Box>
                <Box width="xsmall">   
                    <PreviewCompatibleImage imageInfo={data.react} />
                </Box>  
            
                <img src={data.grommet.publicURL} alt="React Logo" style={{width:"200px"}} />
            </MaxWidthContainer>
        </Box>
    )
}

export default Technologies