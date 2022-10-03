import { Tab } from "@headlessui/react";
import PanelDialog from "./TabPanels/PanelDialog";
import ListDialog from "./TabLists/ListDialog";

interface Props {
	isApproved: () => void;
	isDoubting: () => void;
	isDismiss: () => void;
	isReject: () => void;
	isHired: () => void;
	isConfirmed: boolean;
	postulationId: string;
}

const Panels: React.FC<Props> = ({
	isApproved,
	isDoubting,
	isDismiss,
	isReject,
	isHired,
	isConfirmed,
	postulationId,
}) => {
	return (
		<Tab.Group>
			<ListDialog
				isApproved={isApproved}
				isDoubting={isDoubting}
				isDismiss={isDismiss}
				isReject={isReject}
				isHired={isHired}
				isConfirmed={isConfirmed}
				postulationId={postulationId}
			/>
			<PanelDialog postulationId={postulationId} />
		</Tab.Group>
	);
};

export default Panels;
