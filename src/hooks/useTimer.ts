import { useState } from 'react'

export function UseTimer() {
	/*  */
	const timer = 2
	const [isActive] = useState(false)
	const [isPause] = useState(false)

	// TODO: Implement this function and remove the next line
	!timer === isActive && !isPause
}
