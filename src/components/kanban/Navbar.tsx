import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  userName: string;
}

export default function Navbar({ userName }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 w-screen">
      <nav className="flex flex-row text-white items-center justify-evenly p-4 bg-[#475564]">
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="font-medium"
          >
            Hello {userName}
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
            <button className="px-3 focus:text-cyan-400 focus:underline focus:underline-offset-8">
              Open Positions
            </button>
            <NavLink
              to="/admin/dashboard/candidate-status"
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
        <button className="font-medium w-24 hover:cursor-pointer hover:bg-white hover:text-black p-2 rounded-md hover:transition ease-in-out duration-300">
          Log Out
        </button>
      </nav>
    </header>
  );
}
