import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetCandidatesFiltered } from '../../redux/candidates/actions/CandidateAction';

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(GetCandidatesFiltered(undefined, undefined, query));
    setQuery('');
  };

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
