import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Item from './Item'
import { listQuestionaries } from './types'

function List({ questionaries }: listQuestionaries) {
	const [isVisible, setisVisible] = useState<boolean>(false)
	return (
		<div className="w-full bg-[#FAFAFA] ">
			<div
				className="flex justify-between items-center cursor-pointer border-b-2 border-[#E9E9E9] p-[40px] pl-[80px] py-[30px]"
				onClick={() => setisVisible(!isVisible)}
			>
				<p>Assigned a saved questionary</p>
				<BsChevronDown size={'1.2rem'} className={isVisible ? ' rotate-180' : ''} />
			</div>
			{isVisible && (
				<ul>
					{questionaries.map((questionary, i) => (
						<Item key={i} questionary={questionary} />
					))}
				</ul>
			)}
		</div>
	)
}

export default List
