import React from 'react'
import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import PageLayout from '@layouts/Page'
import Section from '@components/Section'
import Profile from '@components/Profile'

const messages: string[] = [
    "Hello, world!",
    "Welcome! :)",
    "Hi there!",
]

const Home: NextPage = () => {
    return (
        <PageLayout messages={messages}>
            <Profile />

            <Section title='About me!'>
                Testing testing 123!!! This is a test of the fitness gram pacer test.
            </Section>

            <Heading as='h2' fontWeight='normal'></Heading>

        </PageLayout>
    )
}

export default Home