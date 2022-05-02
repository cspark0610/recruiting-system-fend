import { useSelector } from 'react-redux';
import { State } from '../../redux/store/store';
import { VIEW_HOME } from '../../config/routes/paths';

type CreateNewDropdownProps = {
  setShowCreateDropdown: (showCreateDropdown: boolean) => void;
  showCreateDropdown: boolean;
};

export default function CreateNewDropdown({
  setShowCreateDropdown,
}: CreateNewDropdownProps) {
  const positions = useSelector((state: State) => state.positions.positions);

  return (
    <div className="flex flex-col px-4 pt-4 space-y-3 border-b pb-2">
      {positions.map((pos) => (
        <div key={pos._id} className="border-b pb-2 w-48">
          <a
            href={`${VIEW_HOME}?job_id=${pos._id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              onClick={() => setShowCreateDropdown(false)}
              className="transition ease-in-out duration-300 rounded-md p-2 hover:bg-[#475564] hover:text-white"
            >
              {pos.title}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
