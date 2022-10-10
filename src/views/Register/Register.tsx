import { useState } from 'react'

import Text from '@/components/inputs/Text'

import PhoneInput from '@/components/inputs/PhoneInput'
import SingleSelect from '@/components/inputs/SingleSelect'
import Countries from '@/assets/json/Countries.json'
import Checkbox from '@/components/buttons/Checkbox'
import Button from '@/components/inputs/Button'
import Wrapper from '@/components/extras/Wrapper'

const Register = () => {
	// const { t } = useTranslation()
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [phone, setPhone] = useState('')
	const [country, setCountry] = useState({
		id: 0,
		name: '',
	})
	const [position, setPosition] = useState('')
	const [terms, setTerms] = useState(false)
	return (
		<form>
			<Wrapper>
				<h1 className="text-center pt-24 mb-2 text-2xl font-bold text-gray-color">
					Welcome to Work At
				</h1>
				<p className="text-center mb-12">
					Please, complete the registration to begin:
				</p>
				<Text
					id="1"
					name="password"
					value={password}
					width="w-full"
					setValue={setPassword}
					RegExp={''}
					placeholder="Password"
					type="password"
				/>
				<Text
					id="2"
					name="passwordConfirm"
					value={passwordConfirm}
					width="w-full"
					setValue={setPasswordConfirm}
					RegExp={''}
					placeholder="Repeat Password"
					type="password"
				/>
				<PhoneInput value={phone} onChange={setPhone} />

				<SingleSelect
					for="country"
					data={Countries}
					display="flex"
					id="country"
					label="Pais"
					placeholder="Select your country"
					setValue={setCountry}
					// showAlert={true}
					value={country}
					width="w-full"
				/>

				<Text
					id="3"
					name="position"
					value={position}
					width="w-full"
					setValue={setPosition}
					RegExp={''}
					placeholder="Position"
					type="text"
				/>
				<Checkbox
					htmlFor="terms"
					id="terms"
					message="I agree to terms & conditions"
					setValue={setTerms}
					value={terms}
					width="w-full"
				/>
				<div className="p-4 text-center">
					<Button className="min-w-[131px]">Accept</Button>
				</div>
			</Wrapper>
		</form>
	)
}

export default Register
