import "@fontsource/courier-prime"
import React from 'react'

import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import theme from '@lib/theme'
import MainLayout from '@layouts/Main'

const GlobalContext = React.createContext(null)

function App({ Component, pageProps }: AppProps) {
    const [globalState, setGlobalState] = React.useState({})

    return (
        <ChakraProvider theme={theme} >
            <GlobalContext.Provider value={[globalState, setGlobalState]}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </GlobalContext.Provider>
        </ChakraProvider>
    )
}

export { GlobalContext }
export default App
