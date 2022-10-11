import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import Item from './Item'

function List() {
	const [questions, setQuestions] = useState<string[]>([
		'question',
		'question',
	])

	const handleAddQuestion = () => {
		setQuestions([...questions, ''])
	}
	return (
		<>
			{questions.map((question, i) => {
				return (
					<Item
						key={i}
						position={i + 1}
						content={question}
					/>
				)
			})}
			<button
				className="bg-[#00ADEF] p-[5px] rounded-full"
				onClick={handleAddQuestion}
			>
				<BsPlusLg color="#FFFFFF" />
			</button>
		</>
	)
}

export default List
