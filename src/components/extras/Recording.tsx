import "./../../assets/scss/Blink.scss";
import { BsFillRecordFill } from "react-icons/bs";

const Recording = () => {
  return (
    <div className="absolute top-[18px] right-[18px] z-10">
      <BsFillRecordFill className="w-[20px] h-[20px] text-red-color blink-record" />
      <div className="container">
        <div className="rain">
          <div className="waves">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recording;
