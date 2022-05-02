import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { VIEW_KANBAN, VIEW_OPEN_POSITIONS } from '../../config/routes/paths';
import detectOutsideClick from '../../utils/detectOutsideClick';

export default function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);
  detectOutsideClick(profileMenuRef, [setShowProfileMenu]);

  return (
    <header className="absolute top-0 left-0 w-screen">
      <nav className="flex flex-row text-white items-center justify-evenly p-4 bg-[#475564]">
        <div className="relative" ref={profileMenuRef}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="font-medium"
          >
            Hello User
          </button>
          <div
            className={
              showProfileMenu
                ? 'transition ease-in-out duration-200 opacity-100 origin-top-left absolute w-52 bg-white mt-2 rounded-md shadow-lg'
                : 'duration-200 opacity-0 invisible absolute w-52 mt-2'
            }
          >
            <button className="text-black px-3 py-2">My Profile</button>
          </div>
        </div>
        <div className="text-lg text-white mr-16 font-light">
          <ul className="flex divide-x divide-solid">
            <NavLink
              to={VIEW_OPEN_POSITIONS}
              className="px-3 text-white underline underline-offset-8"
            >
              <button>Open Positions</button>
            </NavLink>
            <NavLink
              to={VIEW_KANBAN}
              className={({ isActive }) =>
                `px-3 ${isActive} ? text-cyan-400 underline underline-offset-8 : text-white`
              }
            >
              Candidates Status
            </NavLink>
            <button className="px-3 focus:text-cyan-400 focus:underline focus:underline-offset-8">
              Expert
            </button>
          </ul>
        </div>
        <button className="flex font-medium w-26 hover:cursor-pointer hover:bg-white hover:text-black p-2 rounded-md hover:transition ease-in-out duration-300">
          Log Out <FiLogOut className="mt-1 ml-2" />
        </button>
      </nav>
    </header>
  );
}
