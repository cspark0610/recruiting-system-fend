import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Props {
  link: string;
}

const Back: React.FC<Props> = ({ link }) => {
  /*  */
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate(link);
  };

  return (
    <div className="absolute laptop:top-20 mobile:top-10 laptop:left-24 mobile:left-5 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <button
          className="flex items-center text-gray-color font-raleway font-semibold mobile:text-xs laptop:text-sm desktop:text-base border-none focus:outline-none bg-white"
          onClick={onClick}
        >
          <FaArrowLeft className="h-3 w-3" /> &nbsp; {t("back_button.name")}
        </button>
      </div>
    </div>
  );
};

export default Back;
