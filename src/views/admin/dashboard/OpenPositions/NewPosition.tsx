import {
  ClearErrors,
  ClearInfo,
  ClearSuccess,
  getPositionInfo,
} from '../../../../redux/positions/actions/PositionsActions';
import { PRODUCTION_PATH, VIEW_OPEN_POSITIONS } from '../../../../config/routes/paths';
import { useDispatch, useSelector } from 'react-redux';

import Back from '../../../../components/buttons/Back';
import FrmPosition from '../../../../components/forms/FrmPosition';
import { GetAllUsers } from '../../../../redux/users/actions/UserAction';
import { State } from '../../../../redux/store/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function NewPosition() {
  const dispatch = useDispatch();
  const success = useSelector((state: State) => state.positions.success);
  const error = useSelector((state: State) => state.positions.error);

  const { _id } = useParams();

  const isAdd = !_id;

  if (success.message !== '') {
    setTimeout(() => {
      dispatch(ClearSuccess(dispatch));
    }, 3000);
  }

  if (error.message !== '') {
    setTimeout(() => {
      dispatch(ClearErrors(dispatch));
    }, 5000);
  }

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (_id) {
      dispatch(getPositionInfo(_id!));
    }

    return () => {
      dispatch(ClearInfo(dispatch));
    };
  }, [dispatch, _id]);

  return (

    <div className="flex flex-col mt-32">
      <Back link={`${VIEW_OPEN_POSITIONS}`}/>
      <span className="flex justify-center text-[#475564] text-2xl font-raleway font-semibold ">
        {isAdd ? 'Create New Position' : 'Edit Position'}
      </span>
      <FrmPosition _id={!isAdd ? _id : undefined} />
      <div
        className={
          error.message !== '' && error.message.includes('Network Error')
            ? 'transform -translate-y-0 transition ease-in-out duration-200 flex justify-center mt-20'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {error.message !== '' && (
          <span className="p-2 px-3 bg-[#F84D44] rounded-full text-white text-center font-raleway font-seibold">
            There was an error while connecting to the server. Please check your
            internet connection and try again.
          </span>
        )}
      </div>
      <div
        className={
          success.message !== ''
            ? 'transform -translate-y-0 transition ease-in-out duration-200 flex justify-center mt-20'
            : 'duration-200 opacity-0 invisible'
        }
      >
        {success.message !== '' && (
          <span className="p-2 px-3 bg-[#35C549] rounded-full text-white text-center font-raleway font-seibold">
            {success.message}
          </span>
        )}
      </div>
    </div>
  );
}
