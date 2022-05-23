import { IoMdArrowDropright } from 'react-icons/io';
import { BiLinkExternal } from 'react-icons/bi';

type SubMenuProps = {
  rie_link: string;
  recruiter_filter: string;
};

export default function SubMenu({ rie_link, recruiter_filter }: SubMenuProps) {
  return (
    <div className="ml-12 py-4 bg-[#FAFAFA] border-b-2">
      <div className="flex flex-col ml-5 gap-y-4">
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span>RIE</span>
          <a href={rie_link} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </a>
        </div>
        <div className="flex space-x-1">
          <span>
            <IoMdArrowDropright className="mt-1" />
          </span>
          <span>Recruiter Filter</span>
          <a href={recruiter_filter} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal className="mt-1 ml-3 hover:cursor-pointer text-[#00ADEF]" />
          </a>
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
