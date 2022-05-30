import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import { State } from '../../redux/store/store';
import getPriorityColor from '../../utils/positions';
import Toggle from './Toggle';
import SubMenu from './SubMenu';
import LoaderSpinner from '../../assets/loaderSpinner';

type ItemProps = {
  positionName: string;
  client: string;
  designated: string[];
  rie_link: string;
  recruiter_filter: string;
  inactive: boolean;
  priority: string;
  _id: string;
  isAdmin?: boolean;
};

export default function Item({
  positionName,
  client,
  designated,
  inactive,
  rie_link,
  recruiter_filter,
  priority,
  _id,
  isAdmin,
}: ItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const updating = useSelector((state: State) => state.positions.updating);
  const priorityClass = getPriorityColor(priority);

  return (
    <div className="flex laptop:flex-col">
      <div className="flex justify-between pl-4 py-4 border-b-2 bg-[#FAFAFA] laptop:w-[47rem] desktop:w-[68rem] ml-12">
        <div className="flex space-x-8">
          {' '}
          {isAdmin ? (
            <Toggle
              inactive={inactive}
              _id={_id}
              isToggled={isToggled}
              setIsToggled={setIsToggled}
            />
          ) : null}
          {updating && isToggled ? (
            <LoaderSpinner width="w-7" height="h-7" classes="mt-3" />
          ) : null}
          <div
            className={designated && designated.length > 0 ? 'w-fit' : 'w-fit'}
          >
            <p className="ml-2 font-raleway desktop:w-[20rem] laptop:w-[17rem]">
              {positionName} for <span className="font-semibold">{client}</span>
            </p>
            <div className="flex flex-nowrap w-full divide-x divide-black mt-4">
              {designated && designated.length > 0
                ? designated.map((user: any) => (
                    <div key={user._id}>
                      <p className="text-sm px-2 font-raleway">{user.name}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
          {isAdmin ? (
            <div>
              <div className="mt-2">
                <p
                  className={`p-1 px-4 text-sm rounded-lg font-raleway ${priorityClass}`}
                >
                  {priority}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex space-x-6 laptop:mr-16 desktop:mr-16 items-center">
          <span className="mt-2 font-raleway">March 15</span>
          <button onClick={() => setIsOpen(!isOpen)} className="font-raleway">
            <AiOutlineDown className={isOpen ? 'mt-2 rotate-180' : 'mt-2'} />
          </button>
        </div>
      </div>
      {isOpen ? (
        <SubMenu
          _id={_id}
          rie_link={rie_link}
          recruiter_filter={recruiter_filter}
        />
      ) : null}
    </div>
  );
}
