import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
    return (
        <HStack mb={10} alignSelf='center'>
            <VStack alignItems='left' mr='10'>
                <Heading as='h2' fontSize={{base: '2xl', md: '4xl'}}>Felipe Caldeira</Heading>
                <Text justifyContent='left'>A young man with a dream</Text>
            </VStack>
            <Image
                src='/images/Flip.jpg'
                alt='Felipe Caldeira'
                borderRadius='full'
                boxSize={{base: '100px', md: '150px'}}
                fit='cover'
                align='center 30%'
                shadow='green'
                flexShrink={0}
            />
        </HStack>
    )
}

export default Profile