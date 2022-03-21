import React from "react";
import { FiUpload } from "react-icons/fi";

const FileButton: React.FC = () => {
  return (
    <div className="w-full grid place-items-center mt-4 px-3">
      <label
        htmlFor="resume"
        className="cursor-pointer uppercase bg-transparent rounded-lg bg-white hover:bg-cyan-color text-cyan-color font-semibold hover:text-white py-2 px-4 h-12 border border-cyan-color hover:border-transparent w-full"
      >
        <div className="flex flex-row items-center justify-center">
          <FiUpload /> &nbsp;&nbsp; Upload CV
        </div>
      </label>
      <input className="hidden" id="resume" type="file" />
    </div>
  );
};

export default FileButton;
