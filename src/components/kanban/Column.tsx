import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import Collapsable from './Collapsable';
import Item from './Item';
import { IColumnInfo } from '../../config/kanban/columnInfo';
import { ICandidate } from '../../redux/candidates/reducers/interfaces.interface';

interface ColumnProps {
  title: string;
  column_info: IColumnInfo;
  items: ICandidate[];
  isLoading: boolean;
}

export default function Column({
  title,
  column_info,
  items,
  isLoading,
}: ColumnProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-80 relative">
      <button
        className="flex font-medium ml-24 text-2xl text-center pb-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} <AiOutlineDown className="w-4 mt-2 ml-4" />
      </button>
      <>
        <Collapsable info={column_info} />
        <div
          className={
            isOpen
              ? 'transform translate-y-48 transition ease-in-out duration-500 absolute top-10 bg-gray-200 h-[31rem] w-80 rounded-lg pt-4 pb-4 space-y-2 overflow-y-auto overflow-x-hidden scroll-smooth'
              : 'absolute top-16 bg-gray-200 h-[31rem] w-80 rounded-lg pt-4 pb-4 space-y-2 overflow-y-auto overflow-x-hidden scroll-smooth'
          }
        >
          {isLoading ? (
            <p className="text-center text-lg font-bold">Loading...</p>
          ) : (
            <>
              {items.length === 0 ? (
                <p className="text-center text-lg font-bold">
                  No candidates...
                </p>
              ) : (
                items.map((item: ICandidate) => (
                  <Item
                    key={item._id}
                    name={item.name}
                    job={item.job.title}
                    secondary_status={item.secondary_status!}
                  />
                ))
              )}
            </>
          )}
        </div>
      </>
    </div>
  );
}
