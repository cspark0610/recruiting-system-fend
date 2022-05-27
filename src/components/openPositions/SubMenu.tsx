import { IoMdArrowDropright } from 'react-icons/io';
import { BiLinkExternal } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { VIEW_EDIT_POSITION } from '../../config/routes/paths';

type SubMenuProps = {
  _id: string;
  rie_link: string;
  recruiter_filter: string;
};

export default function SubMenu({
  _id,
  rie_link,
  recruiter_filter,
}: SubMenuProps) {
  const navigate = useNavigate();

  return (
    <div className="ml-12 py-4 bg-[#FAFAFA] border-b-2">
      <div className="flex justify-end pr-12">
        <button
          onClick={() => navigate(`${VIEW_EDIT_POSITION}/${_id}`)}
          className="bg-[#00ADEF] text-white w-fit px-2 rounded-md"
        >
          Edit
        </button>
      </div>
      <div className="flex flex-col ml-5 gap-y-4">
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span className="font-raleway">RIE</span>
          <a href={rie_link} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </a>
        </div>
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span className="font-raleway">Recruiter Filter</span>
          <a href={recruiter_filter} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </a>
        </div>
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span className="font-raleway">Video Questions</span>
          <span>
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </span>
        </div>
      </div>
    </div>
  );
}
