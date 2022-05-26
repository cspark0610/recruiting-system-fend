import { IUser } from './data';

export type GetUsersResponse = {
  status: number;
  allUsers: IUser[];
};

export type LoginUserResponse = {
  status: number;
  access_token: string;
  refresh_token: string;
  user: IUser;
};

export type RefreshTokenResponse = {
  accessToken: string;
};
