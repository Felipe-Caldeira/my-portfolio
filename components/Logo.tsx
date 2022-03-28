import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' passHref>
        <Text
            fontFamily='Courier Prime, monospace'
            color="purple.400"
            fontSize='inherit'
            fontWeight='normal'
            as='a'
            display='block'
            transform='translate(0, -2px)'
            _hover={{transform: 'scale(1.0125) translate(0, -2px)'}}
            _active={{transform: 'scale(.99) translate(0, -2px)'}}
            transition='ease .2s'
        >
            felipe
        </Text>
    </Link>
    
  )
}

export default Logo