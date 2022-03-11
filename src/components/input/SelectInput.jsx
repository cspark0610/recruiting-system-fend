import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import countries from '../../assets/json/countries.json'

export function SelectInput(props) {

    const [selectedValue, setSelectedValue] = useState(countries[0])

    return (
        <div className="relative w-full md:w-1/2 px-3 p-3">
            <label className="block text-sm font-normal text-text-color font-Raleway">
                {props.label}
            </label>
            <Listbox value={selectedValue} onChange={setSelectedValue} className="font-Raleway">
                <div className="relative">
                    <Listbox.Button className="relative w-full text-left bg-gray-200 text-gray-700 border border-gray-200 rounded focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 py-3 px-4 leading-tight">
                        <span className="block truncate">{selectedValue.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {countries.map((country, countryId) => (
                                <Listbox.Option
                                    key={countryId}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-primary-color bg-blue-100' : 'text-gray-900'
                                        }`
                                    }
                                    value={country}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {country.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-color">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
