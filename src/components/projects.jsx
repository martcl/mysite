import React from "react"
import { Box, Button, Heading,Text, ResponsiveContext } from "grommet"
import Card  from "./card"

import MaxWidthContainer from "./MaxWidthContainer"

import styled from "styled-components"
import { Link } from "gatsby"

import { Archive } from "grommet-icons"

const Container = styled.div`
padding: 1rem;
display: flex;
overflow-x: scroll;
scroll-snap-type: x mandatory;


`
const Child = styled.div`
scroll-snap-align: center;
display: inline-block;
border-radius: 3px;
margin-right: 3rem;
`

const isMobile = (size) => size === "xsmall" || size === "small"

function Projects({posts}) {
    const size = React.useContext(ResponsiveContext)
    return(
        <Box background="light-2" pad={{vertical:"medium"}} >
            <Container>
                <Child>
                    {isMobile(size)? "": <div style={{width:"200px"}} />}
                    
                    </Child>
                        {posts && posts.map(post => {
                            return(
                                <Child key={post.id}>
                                    <Card post={post}/> 
                                </Child>
                            )
                        })}   
            </Container>
            <MaxWidthContainer >
                <Link to="/blog" style={{alignSelf:"center"}}>
                    <Box direction="row" gap="small">
                        <Archive color="grey" />
                        <Text color="grey"> Eldre innlegg </Text>
                    </Box>  
                    
                </Link>
            </MaxWidthContainer>
            
        </Box>
    )
}


export default Projects