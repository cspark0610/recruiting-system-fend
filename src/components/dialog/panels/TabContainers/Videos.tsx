import { BsPlay } from "react-icons/bs";
import QskInterview from "../../../extras/QskInterview";

const Videos = () => {
  return (
    <div className="grid justify-items-center">
      <div className="mt-[48px] grid justify-items-start w-[85%]">
        <p className="font-raleway font-semibold text-gray-color text-[20px]">
          Samuel Vidal Muñoz
        </p>
      </div>
      <section className="grid justify-items-center grid-cols-2 gap-[36px] w-[85%]">
        <div className="w-full">
          <div className="my-[32px]">
            <div className="relative bg-light-color border-light-color rounded-[10px] w-[414px] h-[322px]">
              <span className="absolute top-[35%] left-[165px]">
                <BsPlay className="text-cyan-color w-[81px] h-[85px]" />
              </span>
            </div>
            <p className="relative font-raleway text-gray-color text-sm mt-[17px]">
              *This candidate haven't completed any task yet
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[14px] font-bold uppercase my-3">
              Questions
            </p>
            <div className="relative">
              <QskInterview classes="text-[12px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
