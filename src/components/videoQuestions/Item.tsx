import { itemQuestionary } from './types'

function Item({ questionary }: itemQuestionary) {
	return (
		<li className="flex justify-between items-center border-b-2 border-[#E9E9E9] p-[24px] pl-[80px] text-sm">
			<div className="pl-2 relative">
				<span className="h-[7px] w-[7px] bg-[#475564] rounded-full absolute top-[6px] left-[-10px]"></span>
				<p>{questionary.name}</p>
				<p>March 15</p>
			</div>
			<button className="text-[#00ADEF] cursor-pointer ">Clone</button>
		</li>
	)
}

export default Item
