import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import {
  ClearSuccess,
  DeletePosition,
} from '../../redux/positions/actions/PositionsActions';
import { State } from '../../redux/store/store';
import Modal from '../extras/Modal';
import Item from '../openPositions/Item';
import Pagination from './Pagination';
import PaginationData from '../../config/types/paginationData';

type ListProps = {
  title: string;
  items: PaginationData;
  inactive: boolean;
  isAdmin?: boolean;
};

export default function List({ title, items, inactive, isAdmin }: ListProps) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const success = useSelector((state: State) => state.positions.success);

  const handleClick = (_id: string) => {
    setSelectedItem(_id);
    setShowWarning(!showWarning);
  };

  const handleClose = () => {
    setShowWarning(!showWarning);
    setSelectedItem('');
  };

  const handleDelete = () => {
    dispatch(DeletePosition(selectedItem));

    setTimeout(() => {
      dispatch(ClearSuccess(dispatch));
    }, 3000);
  };

  useEffect(() => {
    if (!isAdmin) {
      setIsOpen(true);
    }
  }, [isAdmin]);

  useEffect(() => {
    setSelectedItem('');
    setShowWarning(false);
  }, [success.message]);

  return (
    <div>
      <div className="flex justify-between laptop:w-[52.5rem] desktop:w-[73.5rem] ml-44">
        <div className="flex">
          <button
            disabled={items.totalDocs === 0}
            onClick={isAdmin ? () => setIsOpen(!isOpen) : () => {}}
            className={
              (inactive && !isAdmin) || (inactive && isAdmin)
                ? 'flex text-[#475564] gap-5 text-2xl font-semibold'
                : 'flex text-[#00ADEF] gap-5 text-2xl font-semibold'
            }
          >
            {isAdmin ? (
              <AiOutlineRight
                className={
                  isOpen && items.totalDocs > 0 ? 'mt-1 rotate-90 ' : 'mt-1 '
                }
              />
            ) : null}
            {title}
          </button>
          {items.totalDocs === 0 ? (
            <span className="mt-1 ml-6 text-center text-red-500 font-bold">
              No positions available
            </span>
          ) : null}
        </div>
        {isAdmin && items.totalDocs > 0 ? (
          <Pagination title={title} items={items} />
        ) : null}
      </div>
      {isOpen ? (
        <div className="mt-8 ml-44">
          {items.docs.map((item) => (
            <div key={item._id} className="flex">
              <Item
                positionName={item.title}
                designated={item.designated}
                inactive={inactive}
                rie_link={item.rie_link}
                recruiter_filter={item.recruiter_filter}
                priority={item.priority}
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
          {showWarning && selectedItem !== '' && (
            <Modal
              alt="Delete Position"
              classes={true}
              image="reject"
              isVerify={handleDelete}
              message="Are you sure you want to delete this position?"
              onClick={handleClose}
              setValue={handleClose}
              value={showWarning}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
