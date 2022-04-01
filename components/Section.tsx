import React from 'react'
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'

const Section = ({ children, title, ...rest }) => {
    const bgColor = useColorMode()
    const gradientLength = title.length * 24
    return (
        <Box
            pos='relative'
            alignSelf='flex-start'
            my='5'
            {...rest}
        >
            <Heading 
                as='h3' 
                fontSize={{base: '2xl'}} 
                fontWeight='normal'
                bgGradient={`linear(to-r, purple.800, obsidian)`}
                px={2}
                pt={1}
                w={{base: gradientLength}}
                mb={2}
                >
                    {title}
                </Heading>
            <Text>{children}</Text>
        </Box>
  )
}

export default Section