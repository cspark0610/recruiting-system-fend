import { FaSpinner } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import "../../assets/scss/Spinner.scss";

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="spinner">
        <ImSpinner9 className="spinning text-white" size={60} />
      </div>
    </div>
  );
};

export default Spinner;
