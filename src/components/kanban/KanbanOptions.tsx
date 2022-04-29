import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { HiPlusCircle } from 'react-icons/hi';
import {
  GetAllCandidates,
  CleanErrors,
  CleanFilters,
} from '../../redux/candidates/actions/CandidateAction';
import Filters from './Filters';
import Search from './Search';

export default function KanbanOptions() {
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleCleanFilters = () => {
    dispatch(CleanErrors());
    dispatch(CleanFilters());
    dispatch(GetAllCandidates());
  };

  return (
    <div className="flex justify-between pb-2 mt-36 ml-48 w-[80rem] border-b-2">
      <div className="flex space-x-4">
        <Filters />
        <div
          className={
            showSearch
              ? 'transition ease-in-out duration-200 flex pl-2 bg-[#F5F5F5] rounded-[5px]'
              : 'flex pl-2 bg-white'
          }
        >
          <label
            htmlFor="query"
            className={
              showSearch ? 'hidden' : 'mt-[0.75rem] hover:cursor-pointer'
            }
            onClick={() => setShowSearch(!showSearch)}
          >
            {' '}
            <BsSearch />{' '}
          </label>
          {showSearch ? <Search /> : null}
        </div>
        <button
          className="text-[#00ADEF] transition ease duration-300 hover:bg-sky-400 hover:text-white px-2 rounded-md"
          onClick={handleCleanFilters}
        >
          Clean Filters
        </button>
      </div>
      <div className="mr-16">
        <button className="flex bg-sky-400 text-white font-medium rounded-full px-4 py-2 w-44">
          Create New <HiPlusCircle className="ml-8 text-2xl" />
        </button>
      </div>
    </div>
  );
}
