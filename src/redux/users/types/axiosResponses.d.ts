import { IUser } from "./data";

export type GetUsersResponse = {
  status: number;
  users: IUser[];
};
