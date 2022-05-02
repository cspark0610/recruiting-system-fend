import { useEffect } from "react";
import { Tab } from "@headlessui/react";
import Conclusion from "../TabContainers/Conclusion";
import General from "../TabContainers/General";
import Videos from "../TabContainers/Videos";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { GetCandidateInfo } from "../../../../redux/candidates/actions/CandidateAction";
import { State } from "../../../../redux/store/store";

const PanelDialog = () => {
  /*  */
  const dispatch = useDispatch();
  const candidateID = useSelector((state: State) => state.info.detail._id);

  useEffect(() => {
    if (candidateID) {
      const loadInfo = () => dispatch(GetCandidateInfo(candidateID));
      loadInfo();
    }
  }, [candidateID, dispatch]);

  let candidate = useSelector((state: State) => state.info.detail);

  return (
    <Tab.Panels className="w-full">
      <Tab.Panel>
        <General
          name={candidate.name}
          email={candidate.email}
          country={candidate.country}
          english_level={candidate.english_level}
          academic_training={candidate.academic_training}
          phone={candidate.phone}
          date_birth={candidate.date_birth}
          linkedin={candidate.linkedin}
          portfolio={candidate.portfolio}
          working_reason={candidate.working_reason}
          salary_expectation={candidate.salary_expectations}
          available_from={candidate.available_from}
          skill={candidate.skills}
          resume={candidate.cv}
        />
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
