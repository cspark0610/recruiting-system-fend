import { useEffect, useState } from 'react'
import '@/assets/scss/Toast.scss'

interface Props {
	message: string
}

const Toast = ({ message }: Props) => {
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
				<div className="relative flex flex-row align-middle justify-center">
					<div className="container-toast w-[300px]">
						<p className="text-red-color font-raleway text-center text-[15px] leading-[17.61px] font-normal">
							{message}
						</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Toast
