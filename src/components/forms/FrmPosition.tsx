import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelect from 'multiselect-react-dropdown';
import Text from '../inputs/Text';
import Submit from '../buttons/Submit';
import priorities from '../../config/positions/constants';
import { createPosition } from '../../redux/positions/actions/PositionsActions';
import { State } from '../../redux/store/store';
import LoaderSpinner from '../../assets/loaderSpinner';

type OptionValues = {
  id: number;
  name: string;
};

const data: OptionValues[] = [
  {
    id: 1,
    name: 'Usuario prueba',
  },
];

export default function FrmPosition() {
  const dispatch = useDispatch();

  const loading = useSelector((state: State) => state.positions.loading);
  const success = useSelector((state: State) => state.positions.success);
  const error = useSelector((state: State) => state.positions.error);
  const errorMessages = Object.entries(error.message).map(
    ([key, value]) => value,
  );

  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [rieLink, setRieLink] = useState('');
  const [recruiterGuide, setRecruiterGuide] = useState('');
  const [designated_recruiters, setDesignated_recruiters] = useState<
    Array<OptionValues>
  >([]);

  const [selectedPriority, setSelectedPriority] = useState('');

  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isClientNameValid, setIsClientNameValid] = useState(false);
  const [isRieLinkValid, setIsRieLinkValid] = useState(false);
  const [isRecruiterGuideValid, setIsRecruiterGuideValid] = useState(false);
  const [isDesignated_recruitersValid, setIsDesignated_recruitersValid] =
    useState(false);

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
          </div>
        </div>

        <div className="flex">
          <Text
            id="name"
            label="Name"
            name="name"
            placeholder="Position Name"
            RegExp={RegExp.characters}
            setValue={setTitle}
            showAlert={isTitleValid}
            type="text"
            value={title}
            width="laptop:w-1/3 tablet:w-1/3 mobile:w-1/2"
          />
          {errorMessages.length === 1 && errorMessages.includes('Position') ? (
            <span className="text-red-500 ml-4">{error.message}</span>
          ) : (
            <span className="text-red-500 ml-4">
              {errorMessages.filter((msg: any) => msg.includes('Position'))}
            </span>
          )}
        </div>
        <div className="flex">
          <Text
            id="clientName"
            label="Client"
            name="clientName"
            placeholder="Client Name"
            RegExp={RegExp.characters}
            setValue={setClientName}
            showAlert={isClientNameValid}
            type="text"
            value={clientName}
            width="laptop:w-1/3 tablet:w-1/3 mobile:w-1/2"
          />
          {errorMessages.length === 1 && errorMessages.includes('Client') ? (
            <span className="text-red-500 ml-4">{error.message}</span>
          ) : (
            <span className="text-red-500 ml-4">
              {errorMessages.filter((msg: any) => msg.includes('Client'))}
            </span>
          )}
        </div>
        <div className="flex justify-center -mx-3">
          <div>
            <Text
              id="rieLink"
              label="RIE Link"
              name="rieLink"
              placeholder="RIE Link"
              RegExp={RegExp.characters}
              setValue={setRieLink}
              showAlert={isRieLinkValid}
              type="url"
              value={rieLink}
              width="laptop:w-1/3 tablet:w-1/3 mobile:w-1/2"
            />
            {errorMessages.length === 1 && errorMessages.includes('RIE') ? (
              <span className="text-red-500 ml-4">{error.message}</span>
            ) : (
              <span className="text-red-500 ml-4">
                {errorMessages.filter((msg: any) => msg.includes('RIE'))}
              </span>
            )}
          </div>
          <div>
            <Text
              id="recruiterGuide"
              label="Recruiter Guide"
              name="recruiterGuide"
              placeholder="Recruiter Filter Link"
              RegExp={RegExp.characters}
              setValue={setRecruiterGuide}
              showAlert={isRecruiterGuideValid}
              type="url"
              value={recruiterGuide}
              width="laptop:w-1/3 tablet:w-1/3 mobile:w-1/2"
            />
            {errorMessages.length === 1 &&
            errorMessages.includes('Recruiter') ? (
              <span className="text-red-500 ml-4">{error.message}</span>
            ) : (
              <span className="text-red-500 ml-4">
                {errorMessages.filter((msg: any) => msg.includes('Recruiter'))}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div>
            <MultiSelect
              options={data}
              className="w-[52.5rem] hover:cursor-pointer pb-2 mr-6"
              placeholder="Designated Recruiter"
              hidePlaceholder={true}
              avoidHighlightFirstOption={true}
              displayValue="name"
              onSelect={setDesignated_recruiters}
              onRemove={setDesignated_recruiters}
              selectedValues={designated_recruiters}
            />
            {errorMessages.length === 1 &&
            errorMessages.includes('designate') ? (
              <span className="text-red-500 ml-4">{error.message}</span>
            ) : (
              <span className="text-red-500 ml-4">
                {errorMessages.filter((msg: any) => msg.includes('designate'))}
              </span>
            )}
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
