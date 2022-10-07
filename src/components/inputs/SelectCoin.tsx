import { Listbox, Transition } from '@headlessui/react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Fragment } from 'react'

interface OptionValues {
	id: number
	name: string
}

interface Props {
	data: OptionValues[]
	value: any
	setValue: any
	placeholder: string
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const SelectCoin: React.FC<Props> = (props) => {
	return (
		<div className="absolute mobile:top-[25px] mobile:left-[10px] tablet:top-[10px] tablet:left-[10px] laptop:top-[10px] laptop:left-[10px] z-10">
			<div className="relative">
				<Listbox
					value={props.data ? props.data : props.value}
					onChange={(data: OptionValues) => {
						props.setValue(data)
					}}
				>
					{({ open }) => (
						<>
							<div className="relative">
								<Listbox.Button className="flex items-center bg-transparent w-[50px] p-2 leading-tight text-gray-color font-light text-left font-raleway mobile:text-xs tablet:text-[15px] laptop:text-[15px] cursor-pointer focus:outline-none">
									<span className="block truncate">
										{props.value
											? props.value.name
											: props.placeholder}
									</span>
									<span className="absolute pointer-events-none">
										<RiArrowDropDownLine
											className="w-5 h-5 mobile:ml-[25px] tablet:ml-[30px] laptop:ml-[30px]"
											aria-hidden="true"
										/>
									</span>
								</Listbox.Button>

								<Transition
									show={open}
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute z-10 mt-[16px] w-[50px] bg-white shadow-lg max-h-56 rounded-md py-2 overflow-auto focus:outline-none">
										<div className="grid">
											{props.data &&
												props.data.map(
													(data: OptionValues) => (
														<Listbox.Option
															key={data.id}
															className={({ active }) =>
																classNames(
																	active
																		? 'text-white bg-cyan-color/70 border-transparent'
																		: 'text-gray-color',
																	'cursor-default select-none relative py-2 mobile:text-xs laptop:text-sm font-raleway w-full',
																)
															}
															value={data}
														>
															{({ selected }) => (
																<>
																	<div className="flex items-center">
																		<span
																			className={classNames(
																				selected
																					? 'font-semibold'
																					: 'font-normal',
																				'ml-3 block truncate',
																			)}
																		>
																			{data.name}
																		</span>
																	</div>
																</>
															)}
														</Listbox.Option>
													),
												)}
										</div>
									</Listbox.Options>
								</Transition>
							</div>
						</>
					)}
				</Listbox>
			</div>
		</div>
	)
}

export default SelectCoin
