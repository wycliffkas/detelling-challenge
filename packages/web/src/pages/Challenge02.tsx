import { Box, Heading, UnorderedList, ListItem, Link, Text, chakra } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

function Challenge02() {
    // Ten image URLs
    // const images = Array(10).fill("https://picsum.photos/800")
    return (
        <Layout>
            <Heading pt={3}>Croussel</Heading>
            {
                // TODO
            }
            <Box mt={16}>
                <Heading size="md">Task</Heading>
                <Text mt={3}>Build a custom carousel componenet using Chakra UI.</Text>
                <UnorderedList mt={3}>
                    <ListItem>Use React <Link color="teal.500" href="https://reactjs.org/docs/components-and-props.html">function components</Link> and <Link color="teal.500" href="https://reactjs.org/docs/hooks-intro.html">hooks</Link> over React class components</ListItem>
                    <ListItem>Use <Link color="teal.500" href="https://chakra-ui.com/docs/getting-started">Chakra UI</Link> as UI component library</ListItem>
                    <ListItem>The array named "images" (see src/pages/Challenge01.tsx) holds urls to 10 random images</ListItem>
                    <ListItem>Use CSS transitions to slide images to the left or right</ListItem>
                    <ListItem>The left/right arrows slides the images by one position to the left or right </ListItem>
                    <ListItem>The dots below the image highlight the current position</ListItem>
                    <ListItem>When a dot is clicked, the carousel slides to the corresponding position</ListItem>
                    <ListItem>You <chakra.span fontStyle="italic">may</chakra.span> use additional NPM packages, although none are necessary</ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    );
}

export { Challenge02 };