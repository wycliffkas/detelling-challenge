import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import { fetchGraphQL } from './fetchGraphQL';

const network = Network.create(fetchGraphQL);

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
});

export default environment;
