import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { VIIEW_CREATE_NEW_POSITION } from '../../../../config/routes/paths';
import { State } from '../../../../redux/store/store';
import {
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
  const error = useSelector((state: State) => state.positions.error);

  const isAdmin = true;

  useEffect(() => {
    window.document.title = 'WorkAt - Open Positions';
    batch(() => {
      dispatch(GetActivePositions(6, 1));
      dispatch(GetInactivePositions(6, 1));
    });
  }, [dispatch, success.message]);

  return (
    <div className={isAdmin ? 'mt-32 md:w-screen' : 'mt-48 md:w-screen'}>
      {isAdmin ? (
        <div className="flex justify-end laptop:mr-[18rem] desktop:mr-[22rem] pb-6">
          <CreateNew onClick={() => navigate(VIIEW_CREATE_NEW_POSITION)} />
        </div>
      ) : null}
      {isAdmin ? (
        <div className="space-y-20">
          <List
            title="Active Searches"
            items={activePositions}
            inactive={false}
            isAdmin
          />
          {loading ? (
            <div className="absolute w-full h-[55rem] top-0 left-0 z-20">
              <LoaderSpinner
                width="w-10"
                height="h-10"
                classes="absolute laptop:top-40 laptop:left-[40rem] dektop:top-40 desktop:left-[55rem]"
              />
            </div>
          ) : null}
          <List
            title="Inactive Searches"
            items={inactivePositions}
            inactive={true}
            isAdmin
          />
        </div>
      ) : (
        <List
          title="Your Active Searches"
          items={activePositions}
          inactive={true}
        />
      )}
      <div
        className={
          error.message !== '' && error.message.includes('Network')
            ? 'transform -translate-y-0 transition ease-in-out duration-200 flex justify-center'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {error.message !== '' && (
          <span className="p-2 px-3 bg-[#F84D44] rounded-full text-white text-center font-seibold">
            There was an error while connecting to the server. Please check your
            internet connection and try again.
          </span>
        )}
      </div>
      <div
        className={
          success.message !== ''
            ? 'transform -translate-y-0 transition ease-in-out duration-200 flex justify-center'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {success.message !== '' && (
          <span className="p-2 px-3 bg-[#35C549] rounded-full text-white text-center font-seibold">
            {success.message}
          </span>
        )}
      </div>
    </div>
  );
}
