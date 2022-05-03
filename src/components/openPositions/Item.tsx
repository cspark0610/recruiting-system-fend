import { useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import { State } from '../../redux/store/store';
import Toggle from './Toggle';

type ItemProps = {
  positionName: string;
  designated: string[];
  inactive: boolean;
  _id: string;
};

export default function Item({
  positionName,
  designated,
  inactive,
  _id,
}: ItemProps) {
  const loading = useSelector((state: State) => state.positions.loading);

  return (
    <div className="flex space-x-8 pl-4 py-4 border-b-2 bg-[#FAFAFA] w-[68rem] ml-12 ">
      {' '}
      <Toggle inactive={inactive} _id={_id} />{' '}
      {loading ? (
        <svg
          className="h-5 w-5 animate-spin text-cyan-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            stroke="currentColor"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      <div className="flex flex-col w-40">
        <p>{positionName}</p>
        {designated.map((user: any) => (
          <div className="divide-x">
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <div className="relative pr-[30rem]">
        <div className="mt-2">
          <p className="p-1 px-4 rounded-lg bg-cyan-400">Priority</p>
        </div>
      </div>
      <div className="flex justify-end space-x-6 items-center">
        <span className="mt-2">March 15</span>
        <button>
          <AiOutlineDown className="mt-2" />
        </button>
      </div>
    </div>
  );
}
