import { useSelector, useDispatch } from 'react-redux';
import {
  ClearErrors,
  ClearSuccess,
} from '../../../../redux/positions/actions/PositionsActions';
import { State } from '../../../../redux/store/store';
import FrmPosition from '../../../../components/forms/FrmPosition';

export default function NewPosition() {
  const dispatch = useDispatch();
  const success = useSelector((state: State) => state.positions.success);
  const error = useSelector((state: State) => state.positions.error);

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

  return (
    <div className="flex flex-col">
      <span className="flex justify-center text-[#475564] text-2xl font-semibold mt-32">
        Create New Position
      </span>
      <FrmPosition />
      <div
        className={
          error.message !== '' && error.message.includes('Network Error')
            ? 'transform -translate-y-10 transition ease-in-out duration-200 flex justify-center mt-20'
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
            ? 'transform -translate-y-10 transition ease-in-out duration-200 flex justify-center mt-20'
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
