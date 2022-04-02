import { FiUpload } from "react-icons/fi";

interface Props {
  setValue?: any;
  value: any;
}

const FileInput: React.FC<Props> = ({ setValue, value }) => {
  /*  */
  const onChange = async (evt: any) => {
    console.log("Document: " + evt.currentTarget.files[0]);
    evt.preventDefault();
    const file = evt.target.files[0];
    console.log(file);
    /* setValue(file); */
  };

  return (
    <div className="grid place-items-center w-full mt-4 px-3">
      <label
        htmlFor="resume"
        className="cursor-pointer rounded-lg w-full bg-white hover:bg-cyan-color text-cyan-color font-semibold uppercase hover:text-white py-2 px-4 h-12 border border-cyan-color"
      >
        <div className="flex flex-row items-center justify-center">
          <FiUpload className="hover:text-white" /> &nbsp; Upload CV
        </div>
      </label>
      <input
        accept="application/pdf"
        className="hidden"
        id="resume"
        type="file"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FileInput;
