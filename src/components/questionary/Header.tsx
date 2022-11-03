import React, { useState } from 'react'
import Text from '../../components/inputs/Text'
function Header() {
	const [title, setTitle] = useState('')
	return (
		<div className="flex justify-between w-full items-center mb-[28px]">
			<input
				type="text"
				name="title"
				id="questionary_title"
				value={title}
				placeholder="INSERT TITLE QUESTIONARY"
				onChange={evt => {
					setTitle(evt.target.value)
				}}
				className="bg-[#FFFFFF] placeholder:text-[#BABCBE] border rounded-sm border-[#E9E9E9] px-[24px] py-[18px] placeholder:text-center focus:placeholder:opacity-0 focus:outline-none focus:bg-white"
			/>
			<div className="">
				<button className="text-[#00ADEF] underline">Cancel</button>
				<button className="bg-[#00ADEF] text-[#FFFFFF] px-[8px] py-[8px] rounded-md ml-[25px]">
					Save & Apply
				</button>
			</div>
		</div>
	)
}

export default Header
