import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { VIIEW_CREATE_NEW_POSITION } from '../../../../config/routes/paths';
import { State } from '../../../../redux/store/store';
import getAllPositions from '../../../../redux/positions/actions/PositionsActions';
import CreateNew from '../../../../components/buttons/CreateNew';
import List from '../../../../components/openPositions/List';
import { CleanErrors } from '../../../../redux/candidates/actions/CandidateAction';

export default function PositionsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const positions = useSelector((state: State) => state.positions.positions);
  const success = useSelector((state: State) => state.positions.success);

  const activePositions = positions.filter((position) => position.isActive);
  const inactivePositions = positions.filter((position) => !position.isActive);

  useEffect(() => {
    batch(() => {
      dispatch(getAllPositions());
      dispatch(CleanErrors(dispatch));
    });
  }, [dispatch, success.message]);

  return (
    <div className="mt-32">
      <div className="flex justify-end mr-80">
        <CreateNew onClick={() => navigate(VIIEW_CREATE_NEW_POSITION)} />
      </div>
      <List
        title="Active Searches"
        items={activePositions}
        inactive={false}
        isAdmin
      />
      <List
        title="Inactive Searches"
        items={inactivePositions}
        inactive={true}
        isAdmin
      />
      <div
        className={
          success.message !== ''
            ? 'transform -translate-y-10 transition ease-in-out duration-200 flex justify-center'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {success.message !== '' && (
          <span className="p-2 px-3 bg-green-500 rounded-xl text-white text-center font-seibold">
            {success.message}
          </span>
        )}
      </div>
    </div>
  );
}
