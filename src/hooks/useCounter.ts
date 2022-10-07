import { useState } from 'react'

export function useCounter() {
	const [time, setTime] = useState({
		minute: 0,
		second: 0,
	})
	const [intervalWatch, setIntervalWatch] = useState<any>()
	const [progress, setProgress] = useState(0)

	let updatedS = time.second - 1
	let updatedM = time.minute

	const countDown = () => {
		if (updatedM === 2) {
			updatedM = 0
		}
		if (updatedS === 59) {
			updatedM++
			updatedS = 0
		}
		updatedS++
		setProgress(progress => progress + 1)
		return setTime({ minute: updatedM, second: updatedS })
	}

	const startTimer = () => {
		countDown()
		setIntervalWatch(setInterval(countDown, 1000))
	}

	const stopTimer = () => {
		clearInterval(intervalWatch)
	}

	const resumeTimer = () => startTimer()

	const resetTimer = () => {
		setProgress(0)
		setTime({ minute: 0, second: 0 })
	}

	return {
		time,
		setTime,
		progress,
		startTimer,
		stopTimer,
		resumeTimer,
		resetTimer,
	}
}
