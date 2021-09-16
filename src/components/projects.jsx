import React from "react"
import { Box, Text, ResponsiveContext } from "grommet"
import Card  from "./card"

import MaxWidthContainer from "./MaxWidthContainer"

import styled from "styled-components"
import { Link } from "gatsby"

import { Archive, More, CaretRightFill, CaretLeftFill } from "grommet-icons"

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

            {isMobile(size) &&(
                <Box justify="center" direction="row" alignContent="center">
                    <CaretLeftFill />
                        <More />
                    <CaretRightFill />
                </Box>
            )}
            
            <Container> 
                
                {isMobile(size)? "":<Child> <div style={{width:"250px"}} /></Child>}
                
                {posts && posts.map(post => {
                    return(
                        <Child key={post.id}>
                            <Card post={post} size={isMobile(size)} /> 
                        </Child>
                    )
                })}

            </Container>
        
            <MaxWidthContainer >
                <Link to="/blog" style={{alignSelf:"center"}}>
                    <Box direction="row" gap="small">
                        
                        <Archive color="dark-2" />
                        <Text color="dark-2"> Eldre innlegg </Text>
                    </Box>  
                    
                </Link>
            </MaxWidthContainer>
            
        </Box>
    )
}


export default Projects