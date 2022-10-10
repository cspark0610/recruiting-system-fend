import { VIEW_LOGIN } from '@/config/routes/paths'
import { getStorageItem } from '@/utils/localStorage'

type PrivateRouteProps = {
	children: any
}

export default function PrivateRoute({
	children,
}: PrivateRouteProps) {
	const accessToken = getStorageItem('access', true)

	return accessToken && accessToken !== ''
		? children
		: window.location.assign(VIEW_LOGIN)
}
