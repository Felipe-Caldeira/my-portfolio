import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import MainLayout from '@layouts/Main'


const messages: string[] = [
    "Here's a bit about me!",
    "Get to know me a bit! :)"
]

const ExperiencePage: NextPage = () => {
    return (
        <MainLayout messages={messages}>
            <Box borderRadius="lg" bg="red" p={3} w="40" textAlign="center">
                Well hello there fancy people!!!
            </Box>

        </MainLayout>
    )
}

export default ExperiencePage
