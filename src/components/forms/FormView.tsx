import { AiOutlineUp as ArrowUp, AiOutlineDown as ArrowDown } from "react-icons/ai";

interface Props {
	toggleStatus: boolean;
	setToggleStatus: any;
}

const FormView: React.FC<Props> = ({ toggleStatus, setToggleStatus }) => {
	return (
		<div className="flex flex-col mx-20 border-2 rounded-3xl">
			<div className="mx-8 mb-8">
				<h2 className="text-xl text-[#475564] font-bold mt-32 mb-4">Candidate Records</h2>

				<div className="flex">
					<div className="flex flex-col w-11/12">
						<div className="flex mb-2 h-20 space-x-8 ">
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1">Search by skills</div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">Advanced:</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
								/>
							</div>
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1"></div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">Intermediate:</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
								/>
							</div>
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1"></div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]">Basic:</span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Skill"
								/>
							</div>
						</div>

						<div className="flex h-20 space-x-8">
							<div className="flex flex-col w-2/6 relative">
								<div className="h-1/3 text-[#475564] mb-1">Search by Name:</div>
								<span className="absolute mt-9 mx-5 text-xs text-[#475564]"></span>
								<input
									className="bg-light-color w-full h-16 px-5 pt-3.5 border-none rounded-2xl outline-none focus:shadow-lg focus:shadow-[#C3EBFB]"
									placeholder="Name"
								/>
							</div>

							<div className="w-2/6 mt-8 flex  items-center  select-none relative">
								{toggleStatus && (
									<ul className=" absolute z-10  bg-[#FFFFFF] drop-shadow-xl  w-60 h-15 mt-60 pt-2 pl-4 pb-2 rounded">
										<li className=" flex flex-end items-center justify-center text-xs right-0 text-[#00ADEF]">
											<span className="w-4/6 text-[#475564] font-semibold"></span>
											<span className=" w2/6 cursor-pointer">Select all</span>
										</li>

										<li className="flex flex-end items-center border-b-2 pb-2 pt-2">
											<span className="w-5/6 text-[#00ADEF] font-semibold">Active</span>
											<input className="cursor-pointer" type="checkbox" />
										</li>
										<li className="flex flex-end items-center border-b-2 pb-2 pt-2">
											<span className="w-5/6 text-[#475564] font-semibold">Former</span>
											<input className="cursor-pointer" type="checkbox" />
										</li>
										<li className="flex flex-end items-center border-b-2 pb-2 pt-2">
											<span className="w-5/6 text-[#475564] font-normal">In Process</span>
											<input className="cursor-pointer" type="checkbox" />
										</li>
										<li
											onClick={() => setToggleStatus(!toggleStatus)}
											className="font-semibold pt-4 pb-2 cursor-pointer hover:text-[#00ADEF]"
										>
											Apply
										</li>
									</ul>
								)}

								<div
									className="flex space-x-4 mr-6 items-center cursor-pointer"
									onClick={() => setToggleStatus(!toggleStatus)}
								>
									<span>Status</span>
									{toggleStatus ? <ArrowUp /> : <ArrowDown />}
								</div>

								<div className="text-[#50C7F4] cursor-pointer select-none">Clean filters</div>
							</div>
							<div className="w-2/6 ">
								<span className="h-1/3"></span>
							</div>
						</div>
					</div>

					<div className="flex flex-col w-1/12 select-none">
						<div className="flex items-center pt-6 justify-center h-20 text-[#00ADEF] font-bold cursor-pointer">
							Apply
						</div>
						<div className="flex items-center justify-center h-20"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormView;
