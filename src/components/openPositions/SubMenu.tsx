import { IoMdArrowDropright } from 'react-icons/io';
import { BiLinkExternal } from 'react-icons/bi';

export default function SubMenu() {
  return (
    <div className="ml-12 py-4 bg-[#FAFAFA] border-b-2">
      <div className="flex flex-col ml-5 gap-y-4">
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span>RIE</span>
          <span>
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </span>
        </div>
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span>Recruiter Filter</span>
          <span>
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </span>
        </div>
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span>Video Questions</span>
          <span>
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </span>
        </div>
      </div>
    </div>
  );
}
