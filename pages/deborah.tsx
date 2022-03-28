import React from 'react'
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import PageLayout from '@layouts/Page'

const messages: string[] = [
    "I wuv you!! <3",
    "You is a cutie ;*",
    "Hola, mi amor! :D",
    "Hiya my baby!"
]

const Home: NextPage = () => {
    return (
        <PageLayout messages={messages}>
            <Box borderRadius="lg" bg="red.600" p={3} w="45" textAlign="center" position='relative'>
                {`Hiya babe!! :) <3`}
            </Box>
        </PageLayout>
    )
}

export default Home