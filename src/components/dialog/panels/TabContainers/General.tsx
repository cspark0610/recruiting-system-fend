import { useSelector } from 'react-redux';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaRegFileWord } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { State } from '../../../../redux/store/store';

const General = () => {
  const details = useSelector((state: State) => state.info.detail);

  const birthYear = details.birth_date?.split('-')[0];
  const age = new Date().getFullYear() - birthYear;

  return (
    <div className="grid justify-items-center">
      <section className="grid justify-items-center grid-cols-2 gap-[10px] w-[85%]">
        {/* FIRST GRID */}
        <div className="my-[48px] font-raleway text-gray-color text-[12px] w-full">
          {/*  */}
          <div className="my-[12px]">
            <h2 className="font-semibold text-[20px] text-cyan-color">
              {details.name}
            </h2>
            <p>Lic. en Diseño gráfico</p>
            <div className="my-[10px]">
              <p>
                Date of birth: &nbsp;
                <span className="font-medium">
                  {details.birth_date ? details.birth_date : 'N/A'}
                </span>
              </p>
              <p>
                Age: &nbsp;
                <span className="font-medium">{age ? age : 'N/A'}</span>
              </p>
            </div>
            <p className="flex gap-[10px] items-center">
              <FaMapMarkerAlt className="text-cyan-color w-[14px] h-[16px]" />
              <span>{details.country}</span>
            </p>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <h6 className="font-semibold text-[15px]">Contact details</h6>
            <div>
              <p className="flex gap-[10px] items-center">
                <HiMail className="text-cyan-color w-[14px] h-[16px]" />
                <span>{details.email}</span>
              </p>
              <p className="flex gap-[10px] items-center">
                <BsFillTelephoneFill className="text-cyan-color w-[14px] h-[16px]" />
                <span>{details.phone}</span>
              </p>
            </div>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <h6 className="text-[15px] font-semibold">English level:</h6>
            <div>
              <p>{details.english_level}</p>
            </div>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <p className="font-normal flex items-center my-5">
              <FaRegFileWord className="text-cyan-color w-[19px] h-[26px]" />{' '}
              &nbsp;
              <span className="text-cyan-color">CV</span>
            </p>
            <p className="font-normal my-[10px]">
              Linkedin: &nbsp;
              <span className="text-cyan-color">
                <a href={details.linkedin ? details.linkedin : '#'}>
                  {details.linkedin ? details.linkedin : 'N/A'}
                </a>
              </span>
            </p>
            <p className="font-normal">
              Other Links: &nbsp;
              <span className="text-cyan-color">
                <a href={details.portfolio ? details.portfolio : '#'}>
                  {details.portfolio ? details.portfolio : 'N/A'}
                </a>
              </span>
            </p>
          </div>
        </div>
        {/* SECOND GRID */}
        <div className="w-full my-[48px] font-raleway text-gray-color text-[12px]">
          <div className="my-[12px]">
            <span>Why are you interesting in working with FTF</span>
            <textarea
              name=""
              id=""
              className="resize-none bg-light-color/100 border-light-color border focus:bg-white focus:outline-none focus:border-cyan-color rounded-[10px] max-w-full w-[350px] h-[121px] py-3 px-4 leading-tight font-raleway text-gray-color my-3"
              maxLength={280}
              readOnly
              value={details.working_reason ? details.working_reason : 'N/A'}
            />
          </div>
          <div className="my-5 flex flex-row">
            <p>
              Salary Expectations:{' '}
              <span className="font-bold text-gray-color">
                {details.salary_expectations
                  ? details.salary_expectations
                  : 'N/A'}
              </span>{' '}
            </p>
            <p className="ml-[45px]">
              Available from:{' '}
              <span className="font-bold text-gray-color">
                {details.available_from ? details.available_from : 'N/A'}
              </span>
            </p>
          </div>
          <hr className="text-light-color w-[349.44px]" />
          <div className="my-5">
            <p>
              English Evaluation:{' '}
              <span className="bg-light-color w-[43px] h-[28px] rounded-[5px] px-3 py-1">
                B2
              </span>
            </p>
          </div>
          <hr className="text-light-color w-[349.44px]" />
          <div className="my-5 flex">
            <span>Tech Skills: </span>
            {details.skills ? (
              details.skills.map((skill: string, index: number) => (
                <div key={index}>
                  <span>{skill}</span>
                </div>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
          <hr className="text-light-color w-[349.44px]" />
          <div className="my-5">
            <span>Interview Skills:</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default General;
