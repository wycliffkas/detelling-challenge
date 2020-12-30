import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import logger from "koa-logger";
import helmet from "koa-helmet";
import graphqlHTTP from "koa-graphql";

import schema from "./schema";

const app = new Koa();
const router = new Router();

const port = 5000

const graphqlServer = graphqlHTTP({ schema, graphiql: true });
router.all('/graphql', graphqlServer);

app.listen(port);
app.use(logger())
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(router.routes()).use(router.allowedMethods());

console.log(`Listening on port ${port} ...`);
