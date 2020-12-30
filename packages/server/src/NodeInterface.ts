import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { UserType } from "./graphql";
import { users } from "./utils";
import { User } from "./types";

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);
    if (type === "User")
      return users.find(
        ({ id }: User) => (id as string) === userGlobalID
      );
    return null;
  },
  (obj) => {
    if (obj instanceof User) return UserType;
    return null;
  }
);

export {
  nodeInterface as NodeInterface,
  nodeField as NodeField,
  nodesField as NodesField,
};
