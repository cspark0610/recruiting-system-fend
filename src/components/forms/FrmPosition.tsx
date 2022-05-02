import { useState } from 'react';
import Text from '../inputs/Text';

export default function FrmPosition() {
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [rieLink, setRieLink] = useState('');
  const [recruiterGuide, setRecruiterGuide] = useState('');
  const [designated_recruiters, setDesignated_recruiters] = useState<
    Array<string>
  >([]);

  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isClientNameValid, setIsClientNameValid] = useState(false);
  const [isRieLinkValid, setIsRieLinkValid] = useState(false);
  const [isRecruiterGuideValid, setIsRecruiterGuideValid] = useState(false);
  const [isDesignated_recruitersValid, setIsDesignated_recruitersValid] =
    useState(false);

  const isFormValid = () => {
    title === '' ? setIsTitleValid(false) : setIsTitleValid(true);
    clientName === ''
      ? setIsClientNameValid(false)
      : setIsClientNameValid(true);
    rieLink === '' ? setIsRieLinkValid(false) : setIsRieLinkValid(true);
    recruiterGuide === ''
      ? setIsRecruiterGuideValid(false)
      : setIsRecruiterGuideValid(true);
    designated_recruiters.length === 0
      ? setIsDesignated_recruitersValid(false)
      : setIsDesignated_recruitersValid(true);
  };

  /* Regular Expressions */
  const RegExp = {
    general: /^\s*/,
    characters: /[0-9]/g,
    numbers: /\D/g,
  };

  return (
    <div className="flex justify-center mobile:mt-8 mobile:mx-[5px] tablet:mx-0 laptop:mx-0 laptop:mt-0">
      <section className="mobile:w-full laptop:w-9/12 tablet:w-11/12 p-2">
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
      </section>
    </div>
  );
}
