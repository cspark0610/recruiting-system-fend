import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import './PhoneInput.scss'
const PhoneInput = ({ value, onChange }: PhoneInput) => {
	return (
		<div className="w-full p-3 ">
			<ReactPhoneInput
				specialLabel="Phone"
				country={'pe'}
				value={value}
				onChange={onChange}
				inputClass={`${
					value && '!border-cyan-color bg-light-blue'
				} w-full bg-light-color focus:outline-none focus:bg-white font-light font-raleway text-gray-color focus:border-cyan-color border focus:shadow-cyan-color/50 focus:shadow-md placeholder:text-gray-color `}
				containerClass={`${
					value && '!border-cyan-color bg-light-blue'
				} bg-light-color mobile:rounded-[10px] block laptop:rounded-2xl min-w-full laptop:w-[287px] laptop:h-[54px] mobile:w-[162px] mobile:h-[35px] tablet:w-[241px] tablet:h-[54px] leading-tight mobile:text-xs tablet:text-[15px] laptop:text-[15px]`}
				inputStyle={{ width: '100%', height: '100%' }}
			/>
		</div>
	)
}

export default PhoneInput
