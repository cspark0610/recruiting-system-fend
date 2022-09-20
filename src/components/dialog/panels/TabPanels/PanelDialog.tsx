import { Tab } from "@headlessui/react";
import Conclusion from "../TabContainers/Conclusion";
import General from "../TabContainers/General";
import Videos from "../TabContainers/Videos";

interface Props {
	postulationId: string;
}

const PanelDialog: React.FC<Props> = ({ postulationId }) => {
	return (
		<Tab.Panels className="w-full">
			<Tab.Panel>
				<General postulationId={postulationId} />
			</Tab.Panel>
			<Tab.Panel>
				<Videos />
			</Tab.Panel>
			<Tab.Panel>
				<Conclusion />
			</Tab.Panel>
		</Tab.Panels>
	);
};

export default PanelDialog;
