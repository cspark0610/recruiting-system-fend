import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetCandidatesFiltered,
  CleanSearch,
} from '../../redux/candidates/actions/CandidateAction';
import { State } from '../../redux/store/store';

export default function Search() {
  const [query, setQuery] = useState<string>('');

  const dispatch = useDispatch();

  const cleanSearch = useSelector((state: State) => state.info.cleanSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(GetCandidatesFiltered(undefined, undefined, query));
  };

  if (cleanSearch) {
    setQuery('');
    dispatch(CleanSearch());
  }

  return (
    <div className="inline-block pt-1">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-slate-100 w-[15rem] h-[2rem] px-2 rounded-md focus:outline-none"
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
