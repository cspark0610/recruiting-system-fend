import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetCandidatesFiltered } from '../../redux/candidates/actions/CandidateAction';
import { AiOutlineDown } from 'react-icons/ai';
import secondaryStatus from '../../config/kanban/constants';

type FilterProps = {
  cleanFilters: boolean;
};

export default function Filters({ cleanFilters }: FilterProps) {
  const dispatch = useDispatch();

  const [position, setPosition] = useState<Array<string>>([]);
  const [secondary_status, setSecondaryStatus] = useState<Array<string>>([]);

  const [showPositionFilter, setShowPositionFilter] = useState<boolean>(false);
  const [showStatusFilter, setShowStatusFilter] = useState<boolean>(false);

  if (cleanFilters) {
    setPosition([...position.filter((pos) => pos === undefined)]);
    setSecondaryStatus([
      ...secondary_status.filter((status) => status === undefined),
    ]);
  }

  const handlePositionCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPosition([...position, e.target.value]);
    } else {
      setPosition([...position.filter((item) => item !== e.target.value)]);
    }
  };

  const handleStatusCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSecondaryStatus([...secondary_status, e.target.value]);
    } else {
      setSecondaryStatus([
        ...secondary_status.filter((status) => status !== e.target.value),
      ]);
    }
  };

  const handleActionDispatch = () => {
    dispatch(GetCandidatesFiltered(position, secondary_status, undefined));
    setShowPositionFilter(false);
    setShowStatusFilter(false);
  };

  return (
    <div className="space-x-4 mt-2">
      <span className="mt-2">Positions</span>
      <button
        onClick={() => setShowPositionFilter(!showPositionFilter)}
        className="pr-4"
      >
        <AiOutlineDown />
      </button>

      {showPositionFilter ? (
        <div className="absolute left-[19rem] z-50 rounded-md mt-2 bg-white shadow-md">
          <div className="flex flex-col px-4 pt-4 space-y-4">
            <button className="flex justify-end text-sm text-cyan-500">
              Select All
            </button>
            <div className="flex justify-between border-b-2 pb-2 w-48">
              <p>Fullstack developer</p>
              <input
                className="mt-2 ml-2"
                type="checkbox"
                value="Fullstack Developer"
                onChange={handlePositionCheck}
              />
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>Frontend developer</p>
              <input
                className="mt-2 ml-2"
                type="checkbox"
                value="Frontend Developer"
                onChange={handlePositionCheck}
              />
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>Fullstack developer</p>
              <input className="mt-2 ml-2" type="checkbox" name="" id="" />
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>Fullstack developer</p>
              <input className="mt-2 ml-2" type="checkbox" name="" id="" />
            </div>
          </div>
          <button
            className="ml-2 mb-4 mt-4 p-2 rounded-md font-semibold transition ease duration-300 hover:bg-black hover:text-white"
            onClick={handleActionDispatch}
          >
            Apply
          </button>
        </div>
      ) : null}

      <span className="mt-2">Status</span>
      <button
        onClick={() => setShowStatusFilter(!showStatusFilter)}
        className="pr-4"
      >
        <AiOutlineDown />
      </button>

      {showStatusFilter ? (
        <div className="absolute left-[27rem] z-50 rounded-md mt-2 bg-white shadow-md">
          <div className="flex flex-col px-4 pt-4 space-y-4">
            <button className="flex justify-end text-sm text-cyan-500">
              Select All
            </button>
            {secondaryStatus.map((status) => (
              <div
                key={status.id}
                className="flex justify-between border-b-2 pb-2 w-48"
              >
                <p>{status.displayName}</p>
                <input
                  type="checkbox"
                  className="mt-2 ml-2"
                  value={status.value}
                  onChange={handleStatusCheck}
                />
              </div>
            ))}
          </div>
          <button
            className="ml-2 mb-4 mt-4 p-2 rounded-md font-semibold transition ease duration-300 hover:bg-black hover:text-white"
            onClick={() =>
              dispatch(
                GetCandidatesFiltered(position, secondary_status, undefined),
              )
            }
          >
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
}
