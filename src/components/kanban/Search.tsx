import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { GetCandidatesFiltered } from "../../redux/candidates/actions/CandidateAction";
import { AppDispatch, State } from "../../redux/store/store";

export default function Search() {
	const [query, setQuery] = useState<string>("");

	const dispatch = useDispatch<AppDispatch>();

	const currentFilters = useSelector(
		(state: State) => state.info.currentFilters,
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
	) => {
		e.preventDefault();

		if (query === "") return;

		dispatch(
			GetCandidatesFiltered({
				position: [],
				status: [],
				query,
			}),
		);
	};

	useEffect(() => {
		setQuery(currentFilters.query);
	}, [currentFilters.query]);

	return (
		<div className="inline-block pt-1">
			<form onSubmit={handleSubmit} className="relative space-x-4">
				<button onClick={handleSubmit} className="absolute top-2 font-raleway">
					<BsSearch className="text-slate-400" />
				</button>
				<input
					className="transition ease-in duration-200 bg-[#F5F5F5] w-[15rem] h-[2rem] px-2 font-raleway focus:outline-none caret-[#00ADEF]"
					type="search"
					name="query"
					placeholder="Type to search"
					id="query"
					value={query}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
