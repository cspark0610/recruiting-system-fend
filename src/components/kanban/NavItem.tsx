import { NavLink } from 'react-router-dom'

type NavItemProps = {
	to: string
	text: string
}

export default function NavItem({
	to,
	text,
}: NavItemProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? 'px-3 text-cyan-400 font-raleway underline underline-offset-8 '
					: 'px-3 text-white font-raleway'
			}
		>
			{text}
		</NavLink>
	)
}
