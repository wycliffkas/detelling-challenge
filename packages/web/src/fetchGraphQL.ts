import { Variables } from 'react-relay';
import { RequestParameters } from 'relay-runtime';

async function fetchGraphQL(request: RequestParameters, variables: Variables) {
  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await response.json();
}

export { fetchGraphQL };
