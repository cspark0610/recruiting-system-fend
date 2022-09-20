import { Tab } from "@headlessui/react";
import PanelDialog from "./TabPanels/PanelDialog";
import ListDialog from "./TabLists/ListDialog";

interface Props {
	isApproved: any;
	isDoubting: any;
	isDismiss: any;
	isReject: any;
	isConfirmed: boolean;
	postulationId: string;
}

const Panels: React.FC<Props> = ({
	isApproved,
	isDoubting,
	isDismiss,
	isReject,
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
				isConfirmed={isConfirmed}
			/>
			<PanelDialog postulationId={postulationId} />
		</Tab.Group>
	);
};

export default Panels;
