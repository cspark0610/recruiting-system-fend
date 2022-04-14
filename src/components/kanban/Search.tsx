import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="inline-block pt-1">
      <input
        className="border-2 bg-slate-100 w-[15rem] h-[2rem] px-2 rounded-md focus:outline-none"
        type="search"
        name="query"
        id="query"
        onChange={handleChange}
      />
    </div>
  );
}
