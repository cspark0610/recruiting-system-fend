import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CleanFilters,
  GetCandidatesFiltered,
} from '../../redux/candidates/actions/CandidateAction';
import GetAllJobs from '../../redux/jobs/actions/JobActions';
import { AiOutlineDown } from 'react-icons/ai';
import { State } from '../../redux/store/store';
import secondaryStatus from '../../config/kanban/constants';

export default function Filters() {
  const dispatch = useDispatch();

  const cleanFilters = useSelector((state: State) => state.info.cleanFilters);
  const jobs = useSelector((state: State) => state.job.jobs);

  // adds a checked property to each job object
  let jobsWithChecked = jobs.map((job) => {
    return { ...job, checked: false };
  });

  const [position, setPosition] = useState<Array<string>>([]);
  const [secondary_status, setSecondaryStatus] = useState<Array<string>>([]);

  const [showPositionFilter, setShowPositionFilter] = useState<boolean>(false);
  const [showStatusFilter, setShowStatusFilter] = useState<boolean>(false);

  const wraperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wraperRef);

  if (cleanFilters) {
    setPosition([]);
    setSecondaryStatus([]);
    dispatch(CleanFilters());
  }

  const handlePositionCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setPosition([...position, e.target.value]);
    } else {
      setPosition([...position.filter((item) => item !== e.target.value)]);
    }
  };

  const handleStatusCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSecondaryStatus([...secondary_status, e.target.value]);
    } else {
      setSecondaryStatus([
        ...secondary_status.filter((status) => status !== e.target.value),
      ]);
    }
  };

  const handleAllPositionsCheck = (e: any) => {
    const jobsChecked = jobsWithChecked.map((job) => {
      job.checked = !e.target.checked;
      return job;
    });
    setPosition(jobsChecked.map((job) => job.title));
  };

  const handleAllStatusCheck = (e: any) => {
    const statusChecked = secondaryStatus.map((status) => {
      status.checked = !e.target.checked;
      return status;
    });
    setSecondaryStatus(statusChecked.map((status) => status.value));
  };

  const handleActionDispatch = () => {
    if (position.length === 0 && secondary_status.length === 0) return; // if no filters selected, no action is dispatched

    dispatch(GetCandidatesFiltered(position, secondary_status, undefined));
    setShowPositionFilter(false);
    setShowStatusFilter(false);
  };

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowPositionFilter(false);
          setShowStatusFilter(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    dispatch(GetAllJobs());
  }, [dispatch]);

  return (
    <div ref={wraperRef} className="space-x-4 mt-2">
      <span className="mt-2">Positions</span>
      <button
        onClick={() => setShowPositionFilter(!showPositionFilter)}
        className="pr-4"
      >
        <AiOutlineDown />
      </button>

      {showPositionFilter ? (
        <div className="absolute left-[19rem] z-50 rounded-sm mt-2 bg-white shadow-md">
          <div className="flex flex-col px-4 pt-4 space-y-4">
            <button
              onClick={handleAllPositionsCheck}
              className="flex justify-end text-sm text-cyan-500"
            >
              Select All
            </button>
            {jobs.map((job) => (
              <div
                key={job._id}
                className="flex justify-between border-b pb-2 w-48"
              >
                <label htmlFor={job._id}>{job.title}</label>
                <input
                  type="checkbox"
                  className="mt-2 ml-2 hover:cursor-pointer"
                  name={job.title}
                  id={job._id}
                  checked={position.indexOf(job.title) !== -1 ? true : false}
                  value={job.title}
                  onChange={handlePositionCheck}
                />
              </div>
            ))}
          </div>
          <button
            className="ml-2 mb-4 mt-2 p-2 rounded-md font-semibold transition ease duration-300 hover:bg-slate-600 hover:text-white"
            onClick={handleActionDispatch}
          >
            Apply
          </button>
        </div>
      ) : null}

      <span className="mt-2">Status</span>
      <button
        onClick={() => setShowStatusFilter(!showStatusFilter)}
        className="pr-4"
      >
        <AiOutlineDown />
      </button>

      {showStatusFilter ? (
        <div className="absolute left-[27rem] z-50 rounded-sm mt-2 bg-white shadow-md">
          <div className="flex flex-col px-4 pt-4 space-y-4">
            <button
              className="flex justify-end text-sm text-cyan-500"
              onClick={handleAllStatusCheck}
            >
              Select All
            </button>
            {secondaryStatus.map((status) => (
              <div
                key={status.id}
                className="flex justify-between border-b pb-2 w-48"
              >
                <div className="flex">
                  <div
                    className={`mt-[0.3rem] w-4 h-4 rounded-xl ${status.color}`}
                  ></div>
                  <label htmlFor={status.id.toString()} className="ml-3">
                    {status.displayName}
                  </label>
                </div>
                <input
                  type="checkbox"
                  className="mt-2 ml-2 hover:cursor-pointer"
                  name={status.displayName}
                  id={status.id.toString()}
                  checked={
                    secondary_status.indexOf(status.value) !== -1 ? true : false
                  }
                  value={status.value}
                  onChange={handleStatusCheck}
                />
              </div>
            ))}
          </div>
          <button
            className="ml-2 mb-4 mt-2 p-2 rounded-md font-semibold transition ease duration-300 hover:bg-slate-600 hover:text-white"
            onClick={handleActionDispatch}
          >
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
}
