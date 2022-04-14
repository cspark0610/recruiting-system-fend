import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux/store/store';
import { GetAllCandidates } from '../../../redux/candidates/actions/CandidateAction';
import Column from '../../../components/kanban/Column';
import Navbar from '../../../components/navbar/kanban/Navbar';
import Filters from '../../../components/kanban/Filters';
import {
  InterestedInfo,
  ApplyingInfo,
  MeetingInfo,
  ChosenInfo,
} from '../../../config/kanban/columnInfo';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const candidates = useSelector((state: State) => state.info.candidates);

  const interestedCandidates = candidates.filter(
    (candidate) => candidate.main_status === 'interested',
  );
  const applyingCandidates = candidates.filter(
    (candidate) => candidate.main_status === 'applying',
  );
  const meetingCandidates = candidates.filter(
    (candidate) => candidate.main_status === 'meeting',
  );
  const chosenCandidates = candidates.filter(
    (candidate) => candidate.main_status === 'chosen',
  );

  useEffect(() => {
    if (candidates.length > 0) {
      setIsLoading(false);
    }
  }, [candidates]);

  useEffect(() => {
    dispatch(GetAllCandidates());
    setIsLoading(true);
  }, [dispatch]);

  return (
    <>
      <Navbar userName="Juan" />
      <Filters />
      <div className="flex justify-center pt-8">
        <main className="flex flex-row gap-3">
          <Column
            title="Interested"
            column_info={InterestedInfo}
            items={interestedCandidates}
            isLoading={isLoading}
          />
          <Column
            title="Applying"
            column_info={ApplyingInfo}
            items={applyingCandidates}
            isLoading={isLoading}
          />
          <Column
            title="Meeting"
            column_info={MeetingInfo}
            items={meetingCandidates}
            isLoading={isLoading}
          />
          <Column
            title="Chosen"
            column_info={ChosenInfo}
            items={chosenCandidates}
            isLoading={isLoading}
          />
        </main>
      </div>
    </>
  );
}
