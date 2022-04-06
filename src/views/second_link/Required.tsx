import Back from "../../components/buttons/Back";
import FrmData from "../../components/forms/FrmData";
import { VIEW_INSTRUCTIONS } from "../../config/routes/paths";

const Required = () => {
  return (
    <>
      <Back link={VIEW_INSTRUCTIONS} />
      <FrmData />
    </>
  );
};

export default Required;
