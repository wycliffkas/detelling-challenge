import { Suspense } from "react"
import {
  Box,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Routes, Route } from "react-router-dom"
import { Challenge01 } from "./pages/Challenge01"
import { Challenge02 } from "./pages/Challenge02"
import { Home } from "./pages/Home"
import { RelayEnvironmentProvider } from "react-relay/hooks"
import environment from "./relayEnvironment"
import { SplashScreen } from "./components/SplashScreen"

export const App = () => (
  <ChakraProvider theme={theme}>
    <RelayEnvironmentProvider environment={environment}>
    <Header />
      <Box minH="100vh" pt={16}>
        <Suspense fallback={<SplashScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge_01" element={<Challenge01 />} />
            <Route path="/challenge_02" element={<Challenge02 />} />
          </Routes>
        </Suspense>
      </Box>
    </RelayEnvironmentProvider>
  </ChakraProvider>
)
