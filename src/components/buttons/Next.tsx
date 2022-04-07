import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  link: string;
  width: string;
}

const Next: React.FC<Props> = ({ name, link, width }) => {
  /*  */
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  };

  return (
    <div className="flex justify-center mb-3 md:mb-0 mt-8 w-full">
      <input
        className={`${width} cursor-pointer rounded-2xl bg-cyan-color shadow-cyan-color/50 hover:bg-cyan-color/80 shadow-lg text-white font-semibold p-3 sm:w-28  focus:outline-none`}
        type="submit"
        value={name}
        onClick={onClick}
      />
    </div>
  );
};

export default Next;
