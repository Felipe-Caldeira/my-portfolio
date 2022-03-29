import React from 'react'
import { Container } from '@chakra-ui/react'
import { GlobalContext } from "@pages/_app";

const Page = ({ children, messages }) => {
    const [globalState, setGlobalState] = React.useContext(GlobalContext)

    React.useEffect(() => {
        setGlobalState({...globalState,
            messages: messages
        })
    }, [messages])

    return (
        <Container 
            maxW= 'container.sm'
            pos='relative'
            fontSize={{base: 'sm', md: 'md'}}
            centerContent
            >
            {children}
        </Container>
    )
}

export default Page