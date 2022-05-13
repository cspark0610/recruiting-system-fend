import { IUser } from './data';

export type GetUsersResponse = {
  status: number;
  users: IUser[];
};

export type LoginUserResponse = {
  status: number;
  access_token: string;
  refresh_token: string;
  user: IUser;
};
