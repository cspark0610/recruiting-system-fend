import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineDown } from 'react-icons/ai';
import { State } from '../../redux/store/store';
import Toggle from './Toggle';
import SubMenu from './SubMenu';
import LoaderSpinner from '../../assets/loaderSpinner';
import getPositionPriorityColor from '../../utils/getPositionPriorityColor';

type ItemProps = {
  positionName: string;
  designated: string[];
  inactive: boolean;
  priority: string;
  _id: string;
  isAdmin?: boolean;
};

export default function Item({
  positionName,
  designated,
  inactive,
  priority,
  _id,
  isAdmin,
}: ItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const updating = useSelector((state: State) => state.positions.updating);
  const priorityClass = getPositionPriorityColor(priority);

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
            className={
              designated && designated.length > 0
                ? 'flex flex-col w-40'
                : 'flex flex-col w-40 mt-2'
            }
          >
            <p>{positionName}</p>
            {designated && designated.length > 0
              ? designated.map((user: any) => (
                  <div key={user._id} className="divide-x">
                    <p>{user.name}</p>
                  </div>
                ))
              : null}
          </div>
          {isAdmin ? (
            <div className="relative desktop:pr-[30rem]">
              <div className="mt-2">
                <p className={`p-1 px-4 rounded-lg ${priorityClass}`}>
                  {priority}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex space-x-6 laptop:mr-16 desktop:mr-16 items-center">
          <span className="mt-2">March 15</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineDown className={isOpen ? 'mt-2 rotate-180' : 'mt-2'} />
          </button>
        </div>
      </div>
      {isOpen ? <SubMenu /> : null}
    </div>
  );
}
