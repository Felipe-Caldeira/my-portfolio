import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import NavBar from '@components/NavBar'
import View3D from "@components/View3D"

const Main = ({ messages, children } : any) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Felipe Caldeira's homepage" />
                <meta name="author" content="Felipe Caldeira" />
                <meta name="author" content="flippy" />
                <meta property="og:site_name" content="Felipe Caldeira's Homepage" />
                <meta property="og:type" content="website" />
                <title>Felipe Caldeira - Homepage</title>
            </Head>

            <NavBar messages={messages} />


            <Container maxW="container.md" pt={12} centerContent>
                <View3D model='/FlipMimi.glb' 
                    size={[600, 640, 800]}
                    mt={['-120px', '-150px', '-200px']}
                    mb={['-175px', '-200px', '-250px']}
                />
                {children}
                {/* <Footer /> */}
            </Container>
        </Box>
    )
}

export default Main