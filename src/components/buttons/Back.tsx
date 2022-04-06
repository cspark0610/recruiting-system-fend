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
    <div className="relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <button
          className="flex items-center text-gray-color font-raleway font-semibold text-sm border-none focus:outline-none bg-white"
          onClick={onClick}
        >
          <FaArrowLeft className="h-3 w-3" /> &nbsp; {t("back_button.name")}
        </button>
      </div>
    </div>
  );
};

export default Back;
