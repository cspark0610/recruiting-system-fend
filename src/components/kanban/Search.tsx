import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import {
  GetCandidatesFiltered,
  CleanSearch,
  SetAppliedFilters,
} from '../../redux/candidates/actions/CandidateAction';
import { State } from '../../redux/store/store';

export default function Search() {
  const [query, setQuery] = useState<string>('');

  const dispatch = useDispatch();

  const previousQuery = useSelector((state: State) => state.info.candidates);
  const cleanSearch = useSelector((state: State) => state.info.cleanSearch);
  const appliedFilters = useSelector(
    (state: State) => state.info.appliedFilters,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (query === '') return;

    if (appliedFilters) {
      dispatch(GetCandidatesFiltered([], [], query, true, previousQuery));
    } else {
      dispatch(GetCandidatesFiltered(undefined, undefined, query));
      dispatch(SetAppliedFilters());
    }
  };

  if (cleanSearch) {
    setQuery('');
    dispatch(CleanSearch());
  }

  return (
    <div className="inline-block pt-1">
      <form onSubmit={handleSubmit} className="relative space-x-4">
        <button onClick={handleSubmit} className="absolute top-2">
          <BsSearch className="text-slate-400" />
        </button>
        <input
          className="bg-[#F5F5F5] w-[15rem] h-[2rem] px-2 focus:outline-none caret-[#00ADEF]"
          type="search"
          name="query"
          placeholder="Type to search"
          id="query"
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
