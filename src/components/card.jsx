import React from "react"
import { Box, Button, Heading, Paragraph, Text, Anchor } from "grommet"

import { Link } from "gatsby";

import HeroBackground from "./HeroBackground";

function Card({ post, size }) {
    return(

        <Box width={size? "350px": "medium"} elevation="medium" alignSelf="center" >
            <HeroBackground image={post.frontmatter.featuredimage} height="xsmall" >
            </HeroBackground>
            <Box pad={{horizontal:"25px", top:"small", bottom:"medium"}} background="white" fill="vertical" >
                
                <Heading level="2" size="small" margin={{bottom:"xsmall"}}>
                    {post.frontmatter.title}
                </Heading>
                <Text> </Text>
                <Paragraph>
                    {post.frontmatter.description}
                </Paragraph>
                <Box direction="row" justify="between" margin={{vertical:"small"}}>
                    <Link to={`/blog/${post.slug}`}>
                        <Anchor label="les mer" color="fourth" />
                    </Link>
                    <Text alignSelf="center">{post.frontmatter.date}</Text>
                </Box>
            </Box>
        </Box>

    )
}

export default Card