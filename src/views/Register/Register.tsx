import { useState } from 'react'

import Text from '@/components/inputs/Text'

import PhoneInput from '@/components/inputs/PhoneInput'
import SingleSelect from '@/components/inputs/SingleSelect'
import Countries from '@/assets/json/Countries.json'
import Checkbox from '@/components/buttons/Checkbox'
import Button from '@/components/inputs/Button'
import Wrapper from '@/components/extras/Wrapper'
import styles from './Register.module.scss'
import Divider from '@/components/extras/Divider'
const Register = () => {
	// const { t } = useTranslation()
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [phone, setPhone] = useState('')
	const [country, setCountry] = useState({
		id: 0,
		name: '',
	})
	const [position, setPosition] = useState('')
	const [terms, setTerms] = useState(false)
	return (
		<form>
			<Wrapper className={`${styles.Wrapper}`}>
				<h1
					className={`${styles.Title} text-center pt-24 mb-2 text-2xl font-bold text-[#475564] font-raleway`}
				>
					Welcome to Work At
				</h1>
				<p className="text-center mb-12 text-[#475564] text-[15px]">
					Please, complete the registration to begin:
				</p>
				<Text
					id="name"
					name="name"
					value={name}
					width="w-full"
					setValue={setName}
					RegExp={''}
					placeholder="First Name"
					type="text"
				/>
				<Text
					id="lastName"
					name="lastName"
					value={lastName}
					width="w-full"
					setValue={setLastName}
					RegExp={''}
					placeholder="Last Name"
					type="text"
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
					autoComplete="off"
				/>

				<Divider text="Set Password" className="px-4" />
				<Text
					id="1"
					name="password"
					value={password}
					width="w-full"
					setValue={setPassword}
					RegExp={''}
					placeholder="Password"
					type="password"
					autoComplete="new-password"
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
					autoComplete="new-password"
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
