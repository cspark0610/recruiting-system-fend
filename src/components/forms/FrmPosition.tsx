import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPosition } from '../../redux/positions/actions/PositionsActions';
import { State } from '../../redux/store/store';
import MultiSelect from 'multiselect-react-dropdown';
import Text from '../inputs/Text';
import LoaderSpinner from '../../assets/loaderSpinner';
import ErrorMessages from './ErrorMessages';
import priorities from '../../config/positions/constants';
import { VIEW_OPEN_POSITIONS } from '../../config/routes/paths';

type OptionValues = {
  id: string;
  name: string;
};

export default function FrmPosition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state: State) => state.user.users);
  const loading = useSelector((state: State) => state.positions.loading);
  const success = useSelector((state: State) => state.positions.success);
  const error = useSelector((state: State) => state.positions.error);

  const multiselectRef = useRef<MultiSelect>(null);

  const data: OptionValues[] = users.reduce((prev: any, user: any) => {
    return [...prev, { id: user._id, name: user.name }];
  }, []);

  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [rieLink, setRieLink] = useState('');
  const [recruiterGuide, setRecruiterGuide] = useState('');
  const [designated_recruiters, setDesignated_recruiters] = useState<
    Array<OptionValues>
  >([]);

  const [selectedPriority, setSelectedPriority] = useState('');

  /* Regular Expressions */
  const RegExp = {
    general: /^\s*/,
    characters: /[0-9]/g,
    numbers: /\D/g,
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const recruitersName = designated_recruiters.map(
      (recruiter) => recruiter.name,
    );

    dispatch(
      createPosition({
        title,
        client_name: clientName,
        rie_link: rieLink,
        recruiter_filter: recruiterGuide,
        priority: selectedPriority,
        designated: recruitersName,
      }),
    );
  };

  useEffect(() => {
    if (success.message !== '') {
      setTitle('');
      setClientName('');
      setRieLink('');
      setRecruiterGuide('');
      setDesignated_recruiters([]);
      setSelectedPriority('');
      multiselectRef.current?.resetSelectedValues();
    }
  }, [success.message, navigate]);

  return (
    <div className="flex justify-center mobile:mt-8 mobile:mx-[5px] tablet:mx-0 laptop:mx-0 laptop:mt-0">
      <section className="flex flex-col mobile:w-full laptop:w-9/12 tablet:w-11/12 p-2">
        <div className="ml-52 pb-4">
          <div className=" pb-2">
            <span>Select Priority:</span>
          </div>
          <div className="flex space-x-3">
            {priorities.map((priority) => (
              <div key={priority.id}>
                <input
                  type="checkbox"
                  name={priority.name}
                  className="hover:cursor-pointer"
                  id={priority.id.toString()}
                  value={priority.name}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  checked={selectedPriority === priority.name ? true : false}
                />
                <label
                  className="ml-3 hover:cursor-pointer"
                  htmlFor={priority.id.toString()}
                >
                  {priority.displayName}
                </label>
              </div>
            ))}
            <ErrorMessages errorTerms={['priority']} errorState={error} />
          </div>
        </div>
        <div className="flex flex-col">
          <ErrorMessages
            errorTerms={['registered']}
            errorState={error}
            className="flex justify-center pb-2"
          />
          <div className="flex justify-center">
            <div className="flex flex-col">
              <Text
                id="name"
                label="Name"
                name="name"
                placeholder="Position Name"
                RegExp={RegExp.characters}
                setValue={setTitle}
                showAlert={false}
                type="text"
                value={title}
                width="w-[26.5rem]"
              />
              <ErrorMessages
                errorTerms={['Position']}
                errorState={error}
                className="flex flex-col ml-4"
              />
            </div>
            <div className="flex flex-col">
              <Text
                id="clientName"
                label="Client"
                name="clientName"
                placeholder="Client Name"
                RegExp={RegExp.characters}
                setValue={setClientName}
                showAlert={false}
                type="text"
                value={clientName}
                width="w-[26.5rem]"
              />
              <ErrorMessages
                errorTerms={['Client']}
                errorState={error}
                className="flex flex-col ml-4"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Text
                id="rieLink"
                label="RIE Link"
                name="rieLink"
                placeholder="RIE Link"
                RegExp={RegExp.characters}
                setValue={setRieLink}
                showAlert={false}
                type="url"
                value={rieLink}
                width="w-[26.5rem]"
              />
              <ErrorMessages
                errorTerms={['RIE', 'rie_link']}
                errorState={error}
                className="flex flex-col ml-4"
              />
            </div>
            <div>
              <Text
                id="recruiterGuide"
                label="Recruiter Guide"
                name="recruiterGuide"
                placeholder="Recruiter Filter Link"
                RegExp={RegExp.characters}
                setValue={setRecruiterGuide}
                showAlert={false}
                type="url"
                value={recruiterGuide}
                width="w-[26.5rem]"
              />
              <ErrorMessages
                errorTerms={['Recruiter', 'recruiter_filter']}
                errorState={error}
                className="flex flex-col ml-4"
              />
            </div>
          </div>{' '}
          <div className="mt-2 mx-auto">
            <div className="flex flex-col">
              <MultiSelect
                options={data}
                className="w-[51.5rem] z-20 hover:cursor-pointer pb-2"
                placeholder="Designated Recruiter"
                hidePlaceholder={true}
                avoidHighlightFirstOption={true}
                displayValue="name"
                ref={multiselectRef}
                onSelect={setDesignated_recruiters}
                onRemove={setDesignated_recruiters}
                selectedValues={designated_recruiters}
              />
              <ErrorMessages
                errorTerms={['designate']}
                errorState={error}
                className="flex flex-col ml-1"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center cursor-pointer rounded-2xl bg-cyan-color shadow-cyan-color/50 hover:bg-cyan-color/80 shadow-lg text-white font-semibold font-raleway mobile:py-2 mobile:h-[59px] mobile:w-[106px] laptop:h-[59px] laptop:w-[106px] focus:outline-none"
          >
            {loading ? (
              <LoaderSpinner
                width="w-7"
                height="h-7"
                stroke="white"
                fill="white"
              />
            ) : (
              'Create'
            )}
          </button>
        </div>
      </section>
    </div>
  );
}
