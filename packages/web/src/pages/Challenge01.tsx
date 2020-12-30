import { Box, Heading, UnorderedList, ListItem, Link, Text, chakra } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

function Challenge01() {
    return (
        <Layout>
            <Heading pt={3}>User List</Heading>
            {
                // TODO
            }
            <Box mt={16}>
                <Heading size="md">Task</Heading>
                <Text mt={3}>Build a custom paginated user table using React Table, Chakra UI, and Relay.</Text>
                <UnorderedList mt={3}>
                    <ListItem>Use React <Link color="teal.500" href="https://reactjs.org/docs/components-and-props.html">function components</Link> and <Link color="teal.500" href="https://reactjs.org/docs/hooks-intro.html">hooks</Link> over React class components</ListItem>
                    <ListItem>Use <Link color="teal.500" href="https://chakra-ui.com/docs/getting-started">Chakra UI</Link> as UI component library</ListItem>
                    <ListItem>Use <Link color="teal.500" href="https://react-table.tanstack.com/docs/overview">React Table</Link> as utility library, e.g. for sorting columns</ListItem>
                    <ListItem>Use <Link color="teal.500" href="https://relay.dev/docs/en/experimental/a-guided-tour-of-relay">Relay</Link> for data fetching and pagination. The GraphQL schema is defined in schema.graqhql.</ListItem>
                    <ListItem>The table columns "Name" and "Email" should support sorting (current page only)</ListItem>
                    <ListItem>You <chakra.span fontStyle="italic">may</chakra.span> use additional NPM packages, although none are necessary</ListItem>
                </UnorderedList>
            </Box>
        </Layout>
    );
}

export { Challenge01 };