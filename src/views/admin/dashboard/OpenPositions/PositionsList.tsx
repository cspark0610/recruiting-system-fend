import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VIIEW_CREATE_NEW_POSITION } from '../../../../config/routes/paths';
import { State } from '../../../../redux/store/store';
import getAllPositions, {
  ClearSuccess,
} from '../../../../redux/positions/actions/PositionsActions';
import CreateNew from '../../../../components/buttons/CreateNew';
import List from '../../../../components/openPositions/List';
import LoaderSpinner from '../../../../assets/loaderSpinner';

export default function PositionsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const positions = useSelector((state: State) => state.positions.data.docs);
  const paginationData = useSelector((state: State) => state.positions.data);
  const loading = useSelector((state: State) => state.positions.loading);
  const success = useSelector((state: State) => state.positions.success);

  const isAdmin = true;

  const activePositions = positions.filter(
    (position: any) => position.isActive,
  );
  const inactivePositions = positions.filter(
    (position: any) => !position.isActive,
  );

  if (success.message !== '') {
    setTimeout(() => {
      dispatch(ClearSuccess(dispatch));
    }, 3000);
  }

  useEffect(() => {
    window.document.title = 'WorkAt - Open Positions';
    dispatch(getAllPositions(1));
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
            paginationData={paginationData}
            inactive={false}
            isAdmin
          />
          <List
            title="Inactive Searches"
            items={inactivePositions}
            paginationData={paginationData}
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
            ? 'transform -translate-y-10 transition ease-in-out duration-200 flex justify-center'
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
