import React from "react"

import { Text } from "grommet"

import {Box} from "grommet"

import MaxWidthContainer from "./MaxWidthContainer"

import HeroBackground from "./HeroBackground";

const Hero = ({ title, image, height }) => (
  <HeroBackground image={image} height={height}>
    {title && (
    <MaxWidthContainer fill="vertical" justify="end" >
      <Box background="white" alignSelf="start" pad={{vertical:"medium", horizontal:"large"}}>
        <Text margin="0px" weight="bold"> {title} </Text>
      </Box>
    </MaxWidthContainer>
    )}
  </HeroBackground>
)


export default Hero
