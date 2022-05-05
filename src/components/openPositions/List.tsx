import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { IPosition } from '../../redux/positions/types/data';
import Modal from '../extras/Modal';
import Item from '../openPositions/Item';

type ListProps = {
  title: string;
  items: IPosition[];
  inactive: boolean;
  isAdmin?: boolean;
};

export default function List({ title, items, inactive, isAdmin }: ListProps) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleClick = (_id: string) => {
    setSelectedItem(_id);
    setShowWarning(!showWarning);
  };

  return (
    <div className="pb-20">
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
          <AiOutlineRight
            className={
              isOpen && items.length > 0
                ? 'mt-1 rotate-90 transition ease-in-out duration-200'
                : 'mt-1 duration-200'
            }
          />
          {title}
        </button>
        {items.length === 0 ? (
          <span className="mt-1 ml-6 text-center text-red-500 font-bold">
            No positions available
          </span>
        ) : null}
      </div>
      {isOpen ? (
        <div className="mt-8 ml-44">
          {items.map((item) => (
            <div key={item._id} className="flex">
              <Item
                positionName={item.title}
                designated={item.designated}
                inactive={inactive}
                _id={item._id!}
                isAdmin={isAdmin}
              />
              <div className="mt-2">
                {isAdmin ? (
                  <button
                    onClick={() => handleClick(item._id!)}
                    className="mt-4 ml-6 h-8"
                  >
                    {' '}
                    <MdDelete />{' '}
                  </button>
                ) : null}
              </div>
            </div>
          ))}
          {showWarning ? (
            <Modal
              alt="Delete Position"
              classes={true}
              image="reject"
              isVerify={() => console.log('deleted')}
              message="Are you sure you want to delete this position?"
              onClick={() => setShowWarning(!showWarning)}
              setValue={() => setShowWarning(!showWarning)}
              value={showWarning}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}