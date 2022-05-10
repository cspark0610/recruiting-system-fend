import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { VIIEW_CREATE_NEW_POSITION } from '../../../../config/routes/paths';
import { State } from '../../../../redux/store/store';
import {
  ClearSuccess,
  GetActivePositions,
  GetInactivePositions,
} from '../../../../redux/positions/actions/PositionsActions';
import CreateNew from '../../../../components/buttons/CreateNew';
import List from '../../../../components/openPositions/List';
import LoaderSpinner from '../../../../assets/loaderSpinner';

export default function PositionsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activePositions = useSelector(
    (state: State) => state.positions.active_positions,
  );
  const inactivePositions = useSelector(
    (state: State) => state.positions.inactive_positions,
  );
  const loading = useSelector((state: State) => state.positions.loading);
  const success = useSelector((state: State) => state.positions.success);

  const isAdmin = true;

  if (success.message !== '') {
    setTimeout(() => {
      dispatch(ClearSuccess(dispatch));
    }, 3000);
  }

  useEffect(() => {
    window.document.title = 'WorkAt - Open Positions';
    dispatch(GetActivePositions(1));
    dispatch(GetInactivePositions(1));
  }, [dispatch, success.message]);

  return (
    <div className={isAdmin ? 'mt-32' : 'mt-48'}>
      {loading ? (
        <LoaderSpinner
          width="w-6"
          height="h-6"
          classes="absolute left-[55rem]"
        />
      ) : null}
      {isAdmin ? (
        <div className="flex justify-end mr-80 pb-6">
          <CreateNew onClick={() => navigate(VIIEW_CREATE_NEW_POSITION)} />
        </div>
      ) : null}
      {isAdmin ? (
        <>
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
        </>
      ) : (
        <List
          title="Your Active Searches"
          items={activePositions}
          inactive={true}
        />
      )}
      <div
        className={
          success.message !== ''
            ? 'transform -translate-y-20 transition ease-in-out duration-200 flex justify-center'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {success.message !== '' && (
          <span className="p-2 px-3 bg-green-500 rounded-full text-white text-center font-seibold">
            {success.message}
          </span>
        )}
      </div>
    </div>
  );
}
