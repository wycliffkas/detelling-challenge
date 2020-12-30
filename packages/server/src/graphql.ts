import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLEnumType } from "graphql";
import {
  connectionDefinitions,
  connectionFromArray,
  connectionArgs,
  mutationWithClientMutationId,
  globalIdField,
} from "graphql-relay";

import { NodeField, NodesField, NodeInterface } from "./NodeInterface";
import { User } from "./types";
import { users } from "./utils";


export const UserRoleType: GraphQLEnumType = new GraphQLEnumType({
  name: "UserRole",
  description: "UserRoleType",
  values: {
    OWNER: { value: "owner" },
    READ: { value: "read" },
    READ_WRITE: { value: "read_write" },
  },
});

export const UserType: GraphQLObjectType = new GraphQLObjectType<User>({
  name: "User",
  description: "UserType",
  fields: () => ({
    /*
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: ({ id }) => id,
    },
    */
    id: globalIdField("User"),
    firstName: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ firstName }) => firstName,
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ lastName }) => lastName,
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
    role: {
      type: GraphQLNonNull(UserRoleType),
      resolve: ({ role }) => role,
    },
  }),
  interfaces: () => [NodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType,
});

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "QueryType",
  fields: () => ({
    node: NodeField,
    nodes: NodesField,
    users: {
      type: GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: (_, args) => connectionFromArray(users, {first: 10, last: 10, ...args}),
    },
    apiVersion: {
      type: GraphQLNonNull(GraphQLString),
      resolve: () => "0.0.1",
    }
  }),
});

const UserCreate = mutationWithClientMutationId({
  name: "UserCreate",
  inputFields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    firstName: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    role: {
      type: GraphQLNonNull(UserRoleType),
    },
  },
  mutateAndGetPayload: async ({ id, firstName, lastName, email, role }) => {
    const newUser = { id, firstName, lastName, email, role };
    users.push(newUser);
    return {
      message: "Success",
      error: null,
    };
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "MutationType",
  fields: () => ({
    createUser: UserCreate,
  }),
});