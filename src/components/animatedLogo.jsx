import React from "react";

import { Box, Heading, Image } from "grommet"





function AnimatedLogo({siteTitle}){

    return(
        <Box>
            <Box direction="row" height="xxsmall" width="small" gap="small">
                <Box justify="center">
                    <Image src="/images/logo.png" fit="contain" />
                </Box>
                
                <Heading size="3" level="3" margin="0" alignSelf="center" >{siteTitle} </Heading>
                
            </Box>
        </Box>
    )
}
export default AnimatedLogo