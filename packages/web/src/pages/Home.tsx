import { Heading, Text } from "@chakra-ui/react";
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { Layout } from "../components/Layout";
import { HomeQuery } from "./__generated__/HomeQuery.graphql";

const homeQuery = graphql`
    query HomeQuery {
        apiVersion
    }
`

function Home() {
    // Example of how to fetch data using Relay. For more details see: https://relay.dev/docs/en/experimental/a-guided-tour-of-relay
    const data = useLazyLoadQuery<HomeQuery>(homeQuery, {})
    
    return (
        <Layout>
            <Heading pt={3}>Home</Heading>
            <Text mt={8}>{`API version: ${data.apiVersion}`}</Text>
        </Layout>
    );
}

export { Home };