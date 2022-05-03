import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IPosition } from '../../redux/positions/types/data';
import Item from '../openPositions/Item';

type ListProps = {
  title: string;
  items: IPosition[];
  inactive: boolean;
};

export default function List({ title, items, inactive }: ListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center pb-20">
      <div className="flex ml-44">
        <button
          disabled={items.length === 0}
          onClick={() => setIsOpen(!isOpen)}
          className={
            inactive
              ? 'flex text-[#475564] gap-5 text-2xl font-semibold'
              : 'flex text-[#00ADEF] gap-5 text-2xl font-semibold'
          }
        >
          {isOpen ? (
            <AiOutlineDown className="mt-1" />
          ) : (
            <AiOutlineRight className="mt-1" />
          )}
          {title}
        </button>
        {items.length === 0 ? (
          <span className="mt-1 ml-6 text-center text-red-500 font-bold">
            No positions available
          </span>
        ) : null}
      </div>
      {isOpen ? (
        <div className="flex flex-col justify-center mt-8 ml-44">
          {items.map((item) => (
            <div key={item._id} className="flex w-full">
              <Item
                positionName={item.title}
                designated={item.designated}
                inactive={inactive}
                _id={item._id!}
              />
              <button className="mt-4 ml-6 h-8">
                {' '}
                <MdDelete />{' '}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
