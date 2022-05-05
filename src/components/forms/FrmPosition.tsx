import { useState } from 'react';
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

  const isFormValid = () => {
    title === '' ? setIsTitleValid(true) : setIsTitleValid(false);
    clientName === ''
      ? setIsClientNameValid(true)
      : setIsClientNameValid(false);
    rieLink === '' ? setIsRieLinkValid(true) : setIsRieLinkValid(false);
    recruiterGuide === ''
      ? setIsRecruiterGuideValid(true)
      : setIsRecruiterGuideValid(false);
    designated_recruiters.length === 0
      ? setIsDesignated_recruitersValid(true)
      : setIsDesignated_recruitersValid(false);
  };

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

        <div className="flex justify-center -mx-3">
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
        </div>
        <div className="flex justify-center -mx-3">
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
        </div>
        <div className="flex justify-center mt-2">
          <MultiSelect
            options={data}
            className="w-[51.5rem] hover:cursor-pointer"
            placeholder="Designated Recruiter"
            hidePlaceholder={true}
            avoidHighlightFirstOption={true}
            displayValue="name"
            onSelect={setDesignated_recruiters}
            onRemove={setDesignated_recruiters}
            selectedValues={designated_recruiters}
          />
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
