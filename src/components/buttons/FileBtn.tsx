import React from "react";
import { FaUpload } from "react-icons/fa";

const FileBtn: React.FC = () => {
  return (
    <div className="w-full grid place-items-center mt-4 px-3">
      <label
        htmlFor="resume"
        className="cursor-pointer uppercase bg-transparent rounded-lg hover:bg-primary-color text-primary-color font-semibold hover:text-white py-2 px-4 h-12 border border-primary-color hover:border-transparent w-full"
      >
        <div className="flex flex-row items-center justify-center">
          <FaUpload /> &nbsp;&nbsp; Upload CV
        </div>
      </label>
      <input className="hidden" id="resume" type="file" />
    </div>
  );
};

export default FileBtn;
