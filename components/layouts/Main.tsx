import React from 'react'
import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import NavBar from '@components/NavBar'
import View3D from "@components/View3D"

const Main = ({ children } : any) => {
    return (
        <Box as="main" pb={8} overflowX='hidden'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Felipe Caldeira's homepage" />
                <meta name="author" content="Felipe Caldeira" />
                <meta name="author" content="flippy" />
                <meta property="og:site_name" content="Felipe Caldeira's Homepage" />
                <meta property="og:type" content="website" />
                <title>Felipe Caldeira - Homepage</title>
            </Head>

            <NavBar />


            <Container maxW="container.md" pt={12} centerContent>
                <View3D model='/FlipMimi.glb' 
                    size={{base: '520px', md: '640px', lg: '800px'}}
                    mt={{base: '-120px', md: '-120px', lg: '-200px'}}
                    mb={{base: '-160px', md: '-200px', lg: '-250px'}}
                    mx={{base: '60px', md: 'auto'}}
                />
                {children}
                {/* <Footer /> */}
            </Container>
        </Box>
    )
}

export default Main