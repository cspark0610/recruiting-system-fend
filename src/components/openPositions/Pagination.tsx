import { useDispatch } from 'react-redux';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import PaginationData from '../../config/types/paginationData';
import {
  GetActivePositions,
  GetInactivePositions,
} from '../../redux/positions/actions/PositionsActions';

type PaginationProps = {
  title: string;
  items: PaginationData;
};

export default function Pagination({ title, items }: PaginationProps) {
  const dispatch = useDispatch();

  const itemsLimit = items.pagingCounter - 1 + items.limit;

  const handleNextPage = () => {
    if (title.includes('Active')) {
      dispatch(GetActivePositions(items.limit, items.nextPage));
    } else {
      dispatch(GetInactivePositions(items.limit, items.nextPage));
    }
  };

  const handlePrevPage = () => {
    if (title.includes('Active')) {
      dispatch(GetActivePositions(items.limit, items.prevPage));
    } else {
      dispatch(GetInactivePositions(items.limit, items.prevPage));
    }
  };

  return (
    <div className="flex mt-2 space-x-12">
      <span>
        {items.pagingCounter}-
        {itemsLimit < items.totalDocs ? itemsLimit : items.totalDocs} of{' '}
        {items.totalDocs}
      </span>
      <div className="flex mt-1 gap-x-4 text-xl">
        <button disabled={!items.hasPrevPage} onClick={handlePrevPage}>
          <AiOutlineLeft
            className={
              items.hasPrevPage
                ? 'hover:cursor-pointer'
                : 'text-slate-300 hover:cursor-not-allowed'
            }
          />
        </button>
        <button disabled={!items.hasNextPage} onClick={handleNextPage}>
          <AiOutlineRight
            className={
              items.hasNextPage
                ? 'hover:cursor-pointer'
                : 'text-slate-300 hover:cursor-not-allowed'
            }
          />
        </button>
      </div>
    </div>
  );
}
