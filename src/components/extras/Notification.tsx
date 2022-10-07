import { useEffect, useState } from 'react'
import './../../assets/scss/Notificaction.scss'

type Props = {
	message: string
	color: string
	sizeFile?: boolean
}

const Notification = ({
	message,
	color,
	sizeFile,
}: Props) => {
	/*  */
	const [isDisplay, setIsDisplay] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsDisplay(false)
		}, 3500)
	}, [])

	return (
		<>
			{isDisplay && (
				<div className="container-notification">
					<div className={`notification ${color}`}>
						<p>{message}</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Notification
