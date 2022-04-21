import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { HiPlusCircle } from 'react-icons/hi';
import {
  GetAllCandidates,
  CleanErrors,
} from '../../redux/candidates/actions/CandidateAction';
import Filters from './Filters';
import Search from './Search';

export default function KanbanOptions() {
  const dispatch = useDispatch();

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cleanFilters, setCleanFilters] = useState<boolean>(false);

  const handleCleanFilters = () => {
    setCleanFilters(true);
    dispatch(CleanErrors());
    dispatch(GetAllCandidates());
    setCleanFilters(false);
  };

  return (
    <div className="flex justify-between pb-2 ml-32 w-[80rem] border-b-2">
      <div className="flex space-x-4">
        <Filters cleanFilters={cleanFilters} />
        <label
          htmlFor="query"
          className="mt-[0.75rem] hover:cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        >
          {' '}
          <BsSearch />{' '}
        </label>
        {showSearch ? <Search /> : null}
        <button
          className="text text-sky-400 font-medium transition ease duration-300 hover:bg-sky-400 hover:text-white px-2 rounded-md"
          onClick={handleCleanFilters}
        >
          Clean Filters
        </button>
      </div>
      <div className="mr-16">
        <button className="flex bg-sky-400 text-white font-medium rounded-3xl px-4 py-2 w-44">
          Create New <HiPlusCircle className="ml-8 text-2xl" />
        </button>
      </div>
    </div>
  );
}
