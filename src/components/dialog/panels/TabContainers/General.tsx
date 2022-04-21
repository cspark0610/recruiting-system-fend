import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaRegFileWord } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiLinkExternal } from "react-icons/bi";

const General = () => {
  return (
    <div className="grid justify-items-center">
      <section className="grid justify-items-center grid-cols-2 gap-[10px] w-[85%]">
        {/* FIRST GRID */}
        <div className="my-[48px] font-raleway text-gray-color text-[14px] w-full">
          {/*  */}
          <div className="my-[12px]">
            <h2 className="font-semibold text-[20px] text-cyan-color">
              Samuel Vidal Muñoz
            </h2>
            <p>Lic. en Diseño gráfico</p>
            <div className="my-[10px]">
              <p>
                Date of birth: &nbsp;
                <span className="font-medium">20/12/1990</span>
              </p>
              <p>
                Age: &nbsp;
                <span className="font-medium">31</span>
              </p>
            </div>
            <p className="flex gap-[10px] items-center">
              <FaMapMarkerAlt className="text-cyan-color w-[14px] h-[16px]" />
              <span>Perú</span>
            </p>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <h6 className="font-semibold text-[15px]">Contact details</h6>
            <div>
              <p className="flex gap-[10px] items-center">
                <HiMail className="text-cyan-color w-[14px] h-[16px]" />
                <span>samuelvidal.muñoz@gmail.com</span>
              </p>
              <p className="flex gap-[10px] items-center">
                <BsFillTelephoneFill className="text-cyan-color w-[14px] h-[16px]" />
                <span>987654321</span>
              </p>
            </div>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <h6 className="text-[15px] font-semibold">English level:</h6>
            <div>
              <p>Advance</p>
            </div>
          </div>

          <hr className="text-light-color w-[277px] my-[20px]" />

          <div>
            <p className="font-normal flex items-center my-5">
              <FaRegFileWord className="text-cyan-color w-[19px] h-[26px]" />{" "}
              &nbsp;
              <span className="text-cyan-color">CV</span>
            </p>
            <p className="font-normal my-[10px]">
              Linkedin: &nbsp;
              <span className="text-cyan-color">candidatelinkedin.com</span>
            </p>
            <p className="font-normal">
              Other Links: &nbsp;
              <span className="uppercase">na</span>
            </p>
          </div>
        </div>
        {/* SECOND GRID */}
        <div className="w-full my-[48px] font-raleway text-gray-color text-[14px]">
          <div className="my-[12px]">
            <span>Why are you interesting in working with FTF</span>
            <textarea
              name=""
              id=""
              className="resize-none bg-light-color/100 border-light-color border focus:bg-white focus:outline-none focus:border-cyan-color rounded-[10px] max-w-full w-[350px] h-[121px] py-3 px-4 leading-tight font-raleway text-gray-color my-3"
              maxLength={280}
              readOnly
            ></textarea>
          </div>
          <div className="my-5">
            <span>Salary Expectations: </span>
            <span>Available from: </span>
          </div>
          <hr className="text-light-color w-[349.44px]" />
          <div className="my-5">
            <span>English Evaluation:</span>
          </div>
          <hr className="text-light-color w-[349.44px]" />
          <div className="my-5">
            <span>Tech Skills:</span>
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
