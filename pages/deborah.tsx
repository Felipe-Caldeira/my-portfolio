import React from 'react'
import type { NextPage } from 'next'
import { Box, Image } from '@chakra-ui/react'
import PageLayout from '@layouts/Page'

const messages: string[] = [
    "I wuv you!! <3",
    "You is a cutie ;*",
    "Hola, mi amor! :D",
    "Hiya my baby!",
    "You is da cutest!!",
    "XOXOXO <3",
    "Te amo muchisimo!",
    "My heart is yours <3",
    "Muahmuahmuah!!! ;*"
]

const gifs: string[] = [
    "https://c.tenor.com/Ar6POX8DvhMAAAAC/i-love-you-baby-love-you.gif",
    "https://i.pinimg.com/originals/c0/68/60/c06860b058d7aadaa28874be0a723947.gif",
    "https://c.tenor.com/deLlWpp34aIAAAAC/cat-love.gif",
    "https://c.tenor.com/I12KmSmLNUkAAAAC/cats-love.gif",
    "https://media3.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif?cid=790b76115483149a698e75c2f1d5ac70fafb71e1309581f3&rid=giphy.gif&ct=g",
    "https://c.tenor.com/PWKPLWYDsaEAAAAC/just-looking-at-you-makes-me-happy.gif",
    "https://1.bp.blogspot.com/-7kLWLq0ziYs/X0aMoF18XDI/AAAAAAAAWQQ/JhplaCZjwOo-wE_y_LR5-rwlZtAV3aw1ACLcBGAsYHQ/s498/cut-+love-gif++%287%29.gif",
    "https://c.tenor.com/bcTrSE3dkPkAAAAC/poke-hug.gif",
    "https://i.pinimg.com/originals/df/a0/ce/dfa0ced5c6430c6ff5bbe4a7d2d9d1de.gif",
    "https://c.tenor.com/lRT3o0lOqG4AAAAC/kiss-cute.gif",
    "https://c.tenor.com/AOdHdHyKcVYAAAAC/love-cute.gif",
    "https://c.tenor.com/NIPNTQzL9HQAAAAC/peach-cat-cute.gif",
    "https://c.tenor.com/x-DRJpB_qeQAAAAd/mochi-cat.gif",
    "https://c.tenor.com/YCWoOgFPHo8AAAAC/kiss-hot.gif",
    "https://c.tenor.com/8CZQ5N0SPKAAAAAC/mochi-cat.gif",
]

const Home: NextPage = () => {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)]
    
    return (
        <PageLayout messages={messages}>
            <Box borderRadius="lg" bg="red.600" p={3} w="45" textAlign="center" position='relative'>
                {`Hiya babe!! :) <3`} <br /> {'You is da wuv of my life! Stay happ, cutie!! ;*'}
            </Box>
            <Image mt={10} src={randomGif}></Image>
        </PageLayout>
    )
}

export default Home