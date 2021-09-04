import React from "react"
import { Box, Button, Heading, Paragraph, Text } from "grommet"

import { Link } from "gatsby";

import HeroBackground from "./HeroBackground";

function Card({post}) {
    return(

        <Box width="medium" elevation="medium" alignSelf="center">
            <HeroBackground image={post.frontmatter.featuredimage} height="normal">
            </HeroBackground>
            <Box pad={{horizontal:"medium", vertical:"small"}} background="white">
                
                <Box margin={{horizontal:"xsmall"}}>
                
                <Heading level="2" size="small" margin={{bottom:"xsmall"}}>
                    {post.frontmatter.title}
                </Heading>
                <Text> </Text>
                <Paragraph>
                    {post.frontmatter.description}
                </Paragraph>
                <Box direction="row" justify="between" margin={{vertical:"small"}}>
                    <Link to={`/blog/${post.slug}`}>
                        <Button label="les mer" secondary/>
                    </Link>
                    <Text alignSelf="center">{post.frontmatter.date}</Text>
                </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Card