import React, { useRef }from "react";
import { Box, Heading, Text } from "grommet"

import { CaretDown as Down } from "grommet-icons"

import MaxWidthContainer from "./MaxWidthContainer";
import HeroBackground from "./HeroBackground";


function HomeHero ({ image }) {
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})
  return(

      <Box height="93vh" fill="horizontal" background="accent-4">
        <HeroBackground image={image} height="85vh">
          <MaxWidthContainer animation="fadeIn" fill="vertical" justify="center">
            <Box align="center" margin={{bottom:"xlarge", top:"0"}}>
              <Heading color="white">
              Hei verden!
            </Heading>
            <Text margin="medium" color="white">
            Pellentesque fermentum rutrum est at iaculis. Morbi viverra diam vel dui auctor, et tempor arcu ornare. Fusce nec ipsum interd
            </Text>
            </Box>
          
          </MaxWidthContainer>
        </HeroBackground>
        
      

        <Box background="white" height="100px" fill="horizontal" justify="center">
          <Box 
            alignSelf="center" 
            height="xxsmall" 
            width="xxsmall"  
            align="center"
            justify="center"
            onClick={()=> executeScroll()}
            hoverIndicator={true}
            animation="pulse"
            >
              <Down />
          </Box>
          <div ref={myRef}></div>
        </Box>
        
      </Box>
  )
}


export default HomeHero