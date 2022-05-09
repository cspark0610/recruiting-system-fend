import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { IPosition } from '../../redux/positions/types/data';

type PaginationProps = {
  items: Array<IPosition>;
};

export default function Pagination({ items }: PaginationProps) {
  return (
    <div className="flex mt-2 space-x-12">
      <span>1-5 of {items.length}</span>
      <div className="flex mt-1 gap-x-4 text-xl">
        <button>
          <AiOutlineLeft className="hover:cursor-pointer" />
        </button>
        <button>
          <AiOutlineRight className="hover:cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
