import React from "react"

import { Box, Paragraph, Text } from "grommet"
import MaxWidthContainer from "./MaxWidthContainer"
import HideOnPrintBox from "./HideOnPrintBox"

import { Link } from "gatsby";


function Footer () {

  return(
    <HideOnPrintBox>
    <MaxWidthContainer>
      <Box justify="center" align="center" direction="row" gap="medium" wrap>
        { "" !== "/" && (
          <Text size="small">
            <Link to="/">Tilbake til forsiden</Link>
          </Text>
        )}
        <Text size="small">
          <Link to="/about">Om oss</Link>
         
        </Text>
        <Text size="small">
          <Link to="/privacy">Personvern (cookies)</Link>
        </Text>
        <Paragraph color="dark-3" size="small">
          © {new Date().getFullYear()}
          {" Martin Company Co"}
        </Paragraph>
      </Box>
    </MaxWidthContainer>
  </HideOnPrintBox>
  )
}

export default Footer
