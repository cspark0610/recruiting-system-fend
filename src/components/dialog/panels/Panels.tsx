import ListDialog from '@/components/dialog/panels/TabLists/ListDialog'
import PanelDialog from '@/components/dialog/panels/TabPanels/PanelDialog'
import { Tab } from '@headlessui/react'

interface Props {
	isApproved: () => void
	isDoubting: () => void
	isDismiss: () => void
	isReject: () => void
	isHired: () => void
	isRecandidate: () => void
	isConfirmed: boolean
	postulationId: string
	shouldReload?: boolean
	hideButtons?: boolean
}

const Panels = ({
	isApproved,
	isDoubting,
	isDismiss,
	isReject,
	isHired,
	isRecandidate,
	isConfirmed,
	postulationId,
	shouldReload,
	hideButtons,
}: Props) => {
	return (
		<Tab.Group>
			<ListDialog
				isApproved={isApproved}
				isDoubting={isDoubting}
				isDismiss={isDismiss}
				isReject={isReject}
				isHired={isHired}
				isRecandidate={isRecandidate}
				isConfirmed={isConfirmed}
				postulationId={postulationId}
				shouldReload={shouldReload}
				hideButtons={hideButtons}
			/>
			<PanelDialog postulationId={postulationId} />
		</Tab.Group>
	)
}

export default Panels
