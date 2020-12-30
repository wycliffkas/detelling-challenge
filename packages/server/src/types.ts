/*
enum UserRole {
  OWNER,
  READ,
  READ_WRITE,
}
*/

type UserRole = "OWNER" | "READ" | "READ_WRITE";

class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

export { User }