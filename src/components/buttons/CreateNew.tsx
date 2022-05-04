import { HiPlusCircle } from 'react-icons/hi';

type CreateNewProps = {
  onClick: () => void;
};

export default function CreateNew({ onClick }: CreateNewProps) {
  return (
    <button
      onClick={onClick}
      className="flex bg-sky-400 text-white font-medium rounded-full px-4 py-2 w-44"
    >
      Create New <HiPlusCircle className="ml-8 text-2xl" />
    </button>
  );
}
