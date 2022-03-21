import React from 'react'
import type { NextPage } from 'next'
import { Box, Container } from '@chakra-ui/react'
import MainLayout from '@layouts/Main'

const messages: string[] = [
    "Hello, world!",
    "Welcome! :)",
    "Nice to see you!",
    "Make yourself comfortable!"
]

const Home: NextPage = () => {
    return (
        <MainLayout messages={messages}>
            <Box borderRadius="lg" bg="red" p={3} w="40" textAlign="center">
                Well hello there fancy people!!!
            </Box>

        </MainLayout>
    )
}

export default Home