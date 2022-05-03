import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../redux/store/store';
import {
  CleanErrors,
  GetAllCandidates,
} from '../../../../redux/candidates/actions/CandidateAction';
import Column from '../../../../components/kanban/Column';
import KanbanOptions from '../../../../components/kanban/KanbanOptions';
import {
  InterestedInfo,
  ApplyingInfo,
  MeetingInfo,
  ChosenInfo,
} from '../../../../config/kanban/columnGuideInfo';
import getCandidatesByColumn from '../../../../utils/getCandidatesByColumn';

export default function CandidateStatus() {
  const dispatch = useDispatch();
  let candidates = useSelector((state: State) => state.info.candidates);

  candidates = getCandidatesByColumn(candidates);

  useEffect(() => {
    dispatch(CleanErrors());
    dispatch(GetAllCandidates());
  }, [dispatch]);

  return (
    <div>
      <KanbanOptions />
      <div className="flex justify-center pt-8">
        <main className="flex flex-row gap-3">
          <Column
            title="Interested"
            column_info={InterestedInfo}
            items={candidates.interested}
          />
          <Column
            title="Applying"
            column_info={ApplyingInfo}
            items={candidates.applying}
          />
          <Column
            title="Meeting"
            column_info={MeetingInfo}
            items={candidates.meeting}
          />
          <Column
            title="Chosen"
            column_info={ChosenInfo}
            items={candidates.chosen}
          />
        </main>
      </div>
    </div>
  );
}
