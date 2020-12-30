import { Flex, Spinner } from "@chakra-ui/react";

function SplashScreen() {
    return (
        <Flex h="100%" justify="center" align="center">
            <Spinner size="xl" />
        </Flex>
    );
}

export { SplashScreen };