import { VIEW_LOGIN } from '../../config/routes/paths';

type PrivateRouteProps = {
  children: any;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const accessToken = window.localStorage.getItem('access');

  return accessToken && accessToken !== ''
    ? children
    : window.location.assign(VIEW_LOGIN);
}
