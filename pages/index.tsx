import React from 'react'
import type { NextPage } from 'next'
import { Box, Container, Heading } from '@chakra-ui/react'
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
            <Box borderRadius="lg" bg="red.600" p={3} w="45" textAlign="center" position='relative'>
                {'Hiya babe!! :) <3'}
            </Box>

            <Heading as='h2' fontWeight='normal'></Heading>

        </MainLayout>
    )
}

export default Home