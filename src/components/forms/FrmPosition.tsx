import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPosition } from '../../redux/positions/actions/PositionsActions';
import { State } from '../../redux/store/store';
import MultiSelect from 'multiselect-react-dropdown';
import Text from '../inputs/Text';
import Submit from '../buttons/Submit';
import LoaderSpinner from '../../assets/loaderSpinner';
import ErrorMessages from './ErrorMessages';
import priorities from '../../config/positions/constants';

type OptionValues = {
  id: string;
  name: string;
};

export default function FrmPosition() {
  const dispatch = useDispatch();

  const users = useSelector((state: State) => state.user.users);
  const loading = useSelector((state: State) => state.positions.loading);
  const success = useSelector((state: State) => state.positions.success);
  const error = useSelector((state: State) => state.positions.error);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    }
  }, [success.message]);

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
          <div className="flex justify-center mt-2">
            <div>
              <MultiSelect
                options={data}
                className="w-[51.5rem] hover:cursor-pointer pb-2"
                placeholder="Designated Recruiter"
                hidePlaceholder={true}
                avoidHighlightFirstOption={true}
                displayValue="name"
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

        <div className="z-10 mt-10">
          <Submit name="Create" width="10" onSubmit={handleSubmit} />
        </div>
        {loading ? (
          <div className="flex space-x-2 mt-4 items-center justify-center">
            <span className="font-semibold">Creating New Position...</span>
            <LoaderSpinner width="w-4" height="h-4" />
          </div>
        ) : null}
      </section>
    </div>
  );
}
