import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import MaxWidthContainer from "../components/MaxWidthContainer"

import PreviewCompatibleImage from "./PreviewCompatibleImage"

function Panel({title, text, image, color, elevation}) {
    return(
        <Box background={color? color: "white"} elevation={elevation} pad={{vertical:"medium"}} style={{zIndex:1}}> 
            <MaxWidthContainer 
                direction="row-responsive" 
                gap="medium" 
                pad={{vertical:"medium", horizontal:"medium"}}
            >
                <Box alignSelf="center" flex="grow" width="medium" animation="fadeIn">
                    <PreviewCompatibleImage 
                        imageInfo={{
                            image
                        }}
                    />
                </Box>
                <Box alignSelf="center" margin="small">
                    <Heading level="2" margin={{vertical:"small"}}>{title}</Heading>
                    <Paragraph fill >
                        {text}
                    </Paragraph>
                </Box>
            </MaxWidthContainer>
        </Box>
    )
}

export default Panel