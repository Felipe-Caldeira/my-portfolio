import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

const GenericPage: NextPage = () => {
    return (
        <Box borderRadius="lg" bg="red" p={3} w="40" textAlign="center">
            Well hello there fancy people!!!
        </Box>
    )
}

export default GenericPage
