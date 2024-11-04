import { User } from "../entities";

export type UserRef = Pick<User, 'displayName' | 'name' | 'id'>
