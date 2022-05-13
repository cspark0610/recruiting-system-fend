import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import {
  VIEW_KANBAN,
  VIEW_LOGIN,
  VIEW_OPEN_POSITIONS,
} from '../../config/routes/paths';
import detectOutsideClick from '../../utils/detectOutsideClick';
import cleanLocalStorage from '../../utils/cleanLocalStorage';

export default function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  const userInfo = window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user') as string)
    : null;

  const profileMenuRef = useRef<HTMLDivElement>(null);
  detectOutsideClick(profileMenuRef, [setShowProfileMenu]);

  const handleLogout = () => {
    cleanLocalStorage();
    window.location.href = VIEW_LOGIN;
  };

  return (
    <header className="absolute top-0 left-0 w-screen">
      <nav className="flex flex-row text-white items-center justify-evenly p-4 bg-[#475564]">
        <div className="relative" ref={profileMenuRef}>
          <div className="flex space-x-3">
            {userInfo?.picture ? (
              <img
                src={userInfo.picture}
                alt="profile pic"
                className="w-10 h-10 rounded-full"
              />
            ) : null}
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="font-medium"
            >
              Hello {userInfo?.name.split(' ')[0] || 'User'}
            </button>
          </div>
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
              className={({ isActive }) =>
                isActive
                  ? 'px-3 text-cyan-400 underline underline-offset-8 '
                  : 'px-3 text-white'
              }
            >
              Open Positions
            </NavLink>
            <NavLink
              to={VIEW_KANBAN}
              className={({ isActive }) =>
                isActive
                  ? 'px-3 text-cyan-400 underline underline-offset-8'
                  : 'px-3 text-white'
              }
            >
              Candidates Status
            </NavLink>
            <button className="px-3 focus:text-cyan-400 focus:underline focus:underline-offset-8">
              Expert
            </button>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="flex font-medium hover:cursor-pointer hover:bg-white hover:text-black p-2 rounded-md hover:transition ease-in-out duration-200"
        >
          Log Out <FiLogOut className="mt-1 ml-2" />
        </button>
      </nav>
    </header>
  );
}
