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
                Testing testing 123!!! The FitnessGram™ Pacer Test is a multistage aerobic 
                capacity test that progressively gets more difficult as it continues. 
            </Section>

            <Section title='Bio'>
                Some bio info
            </Section>

            <Section title='Resume'>
                My resume! :O
            </Section>

            <Heading as='h2' fontWeight='normal'></Heading>

        </PageLayout>
    )
}

export default Home