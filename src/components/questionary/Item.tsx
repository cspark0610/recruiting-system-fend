import React from 'react'
import { BsArrowsMove } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

function Item({ position }: questionItem) {
	return (
		<div className="flex w-full items-center mb-[10px]">
			<div className="bg-[#00ADEF] rounded-full h-[26px] w-[26px] flex justify-center items-center text-[#FFFFFF] mr-[15px]">
				<span>{position}</span>
			</div>
			<div className="w-full flex ">
				<input
					type="text"
					name=""
					id=""
					className="w-full h-[54px] border border-[#E9E9E9] rounded-md  rounded-r-none border-r-0 focus:outline-none  focus:bg-white px-[20px]"
					placeholder="Type your question here..."
				/>
				<div className="bg-white border border-[#E9E9E9] rounded-md  rounded-l-none border-l-0 flex items-center justify-center w-[80px] cursor-pointer">
					<BsArrowsMove />
				</div>
			</div>
			<button className="ml-[15px]">
				<MdDelete />
			</button>
		</div>
	)
}

export default Item
