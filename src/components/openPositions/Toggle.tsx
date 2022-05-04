import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ClearSuccess,
  SetIsActive,
} from '../../redux/positions/actions/PositionsActions';
import { State } from '../../redux/store/store';

type ToggleProps = {
  inactive: boolean;
  _id: string;
};

export default function Toggle({ inactive, _id }: ToggleProps) {
  const [isToggled, setToggle] = useState(false);

  const dispatch = useDispatch();

  const loading = useSelector((state: State) => state.positions.loading);

  const handleToggle = () => {
    setToggle(!isToggled);
    dispatch(SetIsActive(_id));

    setTimeout(() => {
      dispatch(ClearSuccess(dispatch));
    }, 3000);
  };

  return (
    <label className="relative w-[4rem] h-[1.80rem] rounded-full bg-[#F0F0F4] mt-2">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0 cursor-pointer"
        checked={isToggled}
        onChange={handleToggle}
      />
      {inactive ? (
        <span
          className={
            isToggled && !loading
              ? "before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[''] before:w-[1.5rem] before:h-[1.5rem] before:bg-white cursor-pointer before:bg-[#00ADEF] before:transition ease-in-out duration-1100 before:transform before:translate-x-8 before:rounded-full cursor-pointer"
              : "before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[''] before:w-[1.5rem] before:h-[1.5rem] before:bg-white cursor-pointer before:bg-[#475564] before:transition ease-in-out duration-1100 before:rounded-full before:transform before:translate-x-0 cursor-pointer"
          }
        />
      ) : (
        <span
          className={
            isToggled && !loading
              ? "before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[''] before:w-[1.5rem] before:h-[1.5rem] before:bg-white cursor-pointer before:bg-[#475564] before:transition ease-in-out duration-1100 before:transform before:translate-x-0 before:rounded-full cursor-pointer"
              : "before:absolute before:top-0.5 before:left-[4px] before:bottom-[4px] before:content-[''] before:w-[1.5rem] before:h-[1.5rem] before:bg-white cursor-pointer before:bg-[#00ADEF] before:transition ease-in-out duration-1100 before:rounded-full before:transform before:translate-x-8 cursor-pointer"
          }
        />
      )}
    </label>
  );
}
