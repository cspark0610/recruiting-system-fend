import { ICandidate } from '../../../redux/candidates/types/data'
import { IPosition } from '../../../redux/positions/types/data'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

interface TableExpertProps {
	toggleStatus?: boolean
	setToggleStatus?: any
	candidates: ICandidate[]
	positions: IPosition[]
}

const TableExpert = ({
	candidates,
	positions,
}: TableExpertProps) => {
	return (
		<div className="h-[50vh] w-screen text-[#313A4E] absolute left-0">
			<TableHeader positions={positions} />
			<TableBody candidates={candidates} />
		</div>
	)
}

export default TableExpert
