import { Menu } from '@headlessui/react';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';

import Search from './Search';

export default function Filters() {
  const [positionFilter, setPositionFilter] = useState<Array<string>>([]);
  const [statusFilter, setStatusFilter] = useState<Array<string>>([]);

  return (
    <div className="flex space-x-4 pb-2 ml-28 w-[82rem] border-b-2">
      <span className="mt-2">Positions</span>
      <button className="pr-4">
        <AiOutlineDown />
      </button>
      <span className="mt-2">Status</span>
      <button className="pr-4">
        <AiOutlineDown width="0" />
      </button>
      <Search />
      <button className="text text-sky-400 font-medium active:bg-sky-400 active:text-white px-2 rounded-md">
        Clean Filters
      </button>
      <div>
        <button className="flex justify-start ml-[29rem] bg-sky-400 text-white font-medium rounded-3xl px-4 py-2 w-40">
          Create New +
        </button>
      </div>
    </div>
  );
}
