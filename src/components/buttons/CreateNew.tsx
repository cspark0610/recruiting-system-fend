import { HiPlusCircle } from 'react-icons/hi'

type CreateNewProps = {
	onClick: () => void
}

export default function CreateNew({
	onClick,
}: CreateNewProps) {
	return (
		<button
			onClick={onClick}
			className="flex bg-[#00ADEF] text-white text-md font-raleway font-semibold rounded-full px-5 py-2 w-48"
		>
			Create New <HiPlusCircle className="ml-8 text-2xl" />
		</button>
	)
}
