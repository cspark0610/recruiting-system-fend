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
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit}>
          <BsSearch />
        </button>
        <input
          className="bg-slate-100 w-[15rem] h-[2rem] px-2 focus:outline-none"
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
