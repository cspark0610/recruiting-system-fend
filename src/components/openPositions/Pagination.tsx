import { useDispatch } from 'react-redux';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import PaginationData from '../../config/paginationData';
import getAllPositions from '../../redux/positions/actions/PositionsActions';

type PaginationProps = {
  paginationData: PaginationData;
};

export default function Pagination({ paginationData }: PaginationProps) {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    console.log('paginated');
    dispatch(getAllPositions(paginationData.nextPage));
  };

  const handlePrevPage = () => {
    console.log('paginated');
    dispatch(getAllPositions(paginationData.prevPage));
  };

  return (
    <div className="flex mt-2 space-x-12">
      <span>
        {paginationData.pagingCounter}-{paginationData.limit} of{' '}
        {paginationData.totalDocs}
      </span>
      <div className="flex mt-1 gap-x-4 text-xl">
        <button disabled={!paginationData.hasPrevPage} onClick={handlePrevPage}>
          <AiOutlineLeft
            className={
              paginationData.hasPrevPage
                ? 'hover:cursor-pointer'
                : 'text-slate-300 hover:cursor-not-allowed'
            }
          />
        </button>
        <button disabled={!paginationData.hasNextPage} onClick={handleNextPage}>
          <AiOutlineRight
            className={
              paginationData.hasNextPage
                ? 'hover:cursor-pointer'
                : 'text-slate-300 cursor-not-allowed'
            }
          />
        </button>
      </div>
    </div>
  );
}
