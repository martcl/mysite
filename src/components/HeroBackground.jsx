import React from "react"
import PropTypes from "prop-types"
import { Box } from "grommet"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const InnerBox = styled(Box)`
  @media print {
    padding: 0;
    text-align: left;
  }
`

const HeroBackground = ({ image, height, children }) => {
  const innerBox = (
    <InnerBox pad={children? "": "large"} height={height}>
      {children}
    </InnerBox>
  )
  if (!!image && image.childImageSharp) {
    return (
      <BackgroundImage
        Tag="div"
        fluid={image.childImageSharp.fluid}
        backgroundColor="steelblue"
      >
        {innerBox}
      </BackgroundImage>
    )
  }

  if (!!image && typeof image === "string") {
    return (
      <Box
        background={{
          color: "steelblue",
          dark: true,
          opacity: true,
          position: "center",
          size: "cover",
          image: `url(${image})`,
        }}
      >
        {innerBox}
      </Box>
    )
  }

  return <Box></Box>
}

HeroBackground.propTypes = {
  image: PropTypes.object,
  height: PropTypes.oneOf(["normal", "medium", "85vh"]),
  children: PropTypes.node,
}

HeroBackground.defaultProps = {
  image: null,
  height: "normal",
  children: null,
}

export default HeroBackground
