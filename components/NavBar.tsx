import { Box, Flex, Stack, Spacer, Link, Menu, MenuButton, IconButton, Heading, Container, MenuList, MenuItem  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import TypedTitle from './TypedTitle';
import Logo from './Logo';
import React from 'react'
import { useRouter } from 'next/router';
import { GlobalContext } from "@pages/_app"

const LinkTo = ({ href, children } :any) => {
    const router = useRouter()
    const active = router.asPath === href
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'purple.500' : undefined}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = ({messages, ...props} :any) => {
    const [globalState, _] = React.useContext(GlobalContext)
    const [titleText, setTitleText] = React.useState("Hello, world!")

    React.useEffect(() => {
        const messages = globalState.messages
        messages && setTitleText(messages[Math.floor(Math.random() * messages.length)])
    }, [globalState.messages])

    return (
        <Box 
            position='fixed'
            as='nav'
            bg='rgba(32, 32, 34, 0.73)'
            w='full'
            backdropFilter='blur(10px)'
            fontFamily='Courier Prime, monospace'
            fontSize={{base: 'xl' , md: '2xl'}}
            zIndex='1'
            pt={1}
            {...props}
        >
            <Container display='flex' maxW='container.xl' h={12} alignItems="center">
                <Heading as='h1' fontSize='inherit'><Logo /></Heading>
                <TypedTitle titleText={titleText} />
                <Spacer></Spacer>
                
                <Stack
                    direction={{ base: 'column', md:'row'}}
                    display={{ base: 'none', md: 'flex'}}
                    width={{ base: 'full', md: 'auto'}}
                    alignItems = 'center'
                    mt={{ base: 4, md: 0}}
                    spacing={4}
                    mx={2}
                    fontSize="medium"
                >
                    <LinkTo href="/experience">Experience</LinkTo>
                    <LinkTo href="/work">Work</LinkTo>
                    <LinkTo href="/contact">Contact</LinkTo>
                </Stack>

                <Box display={{ base: 'inline-block', md: 'none'}} fontSize='medium'>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label='Options' />
                        <MenuList>
                            <NextLink href='/' passHref>
                                <MenuItem as={Link}>About</MenuItem>
                            </NextLink>
                            <NextLink href='/experience' passHref>
                                <MenuItem as={Link}>Experience</MenuItem>
                            </NextLink>
                            <NextLink href='/work' passHref>
                                <MenuItem as={Link}>Work</MenuItem>
                            </NextLink>
                            <NextLink href='/contact' passHref>
                                <MenuItem as={Link}>Contact</MenuItem>
                            </NextLink>
                        </MenuList>
                    </Menu>
                </Box>

            </Container>
        </Box>
    )
}

export default NavBar