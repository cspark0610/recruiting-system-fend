import { IUser, IError, ISuccess } from './data';

export type InitialState = {
  users: IUser[];
  info: IUser;
  loading: boolean;
  error: IError;
  success: ISuccess;
};
