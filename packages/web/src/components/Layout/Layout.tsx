import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren<{}>

function Layout({ children}: LayoutProps) {
    return <Box p={3} maxW={900} w="100%" mx="auto">{children}</Box>
}

export { Layout }