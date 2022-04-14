interface NavbarProps {
  userName: string;
}

export default function Navbar({ userName }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 w-screen">
      <nav className="flex flex-row text-white items-center justify-evenly p-4 bg-slate-600">
        <div>
          <p className="font-medium">Hello {userName}</p>
        </div>
        <div className="flex text-lg text-white mr-16 font-light">
          <ul className="divide-x divide-solid">
            <button className="px-3 focus:text-cyan-400 focus:underline focus:underline-offset-8">
              Open Positions
            </button>
            <button className="px-3 focus:text-cyan-400 focus:underline focus:underline-offset-8">
              Candidates Status
            </button>
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
