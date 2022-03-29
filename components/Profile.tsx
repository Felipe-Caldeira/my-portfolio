import { Heading, Stack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
    return (
        <Stack mb={5} 
            alignSelf='center' 
            direction={{base: 'column', md:'row'}} 
            alignItems='center'
        >
            <VStack alignItems={{base: 'center', md:'flex-start'}} mr={{base: 0, md:'10'}}>
                <Heading as='h2' fontSize={{base: '2xl', md: '4xl'}}>Felipe Caldeira</Heading>
                <Text textAlign={{base: 'center', md:'left'}}>A young man with a dream</Text>
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
                mt={{base:'20px !important', md: 0}}
            />
        </Stack>
    )
}

export default Profile