import { useTranslation } from "react-i18next";
import Next from "../../components/buttons/Next";
import Slider from "../../components/extras/Slider";
import { VIEW_INSTRUCTIONS } from "../../config/routes/paths";

const Welcome = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <section className="grid place-items-center">
        <h2 className="font-semibold text-2xl text-cyan-color">Welcome!</h2>
        <div className="mt-5">
          <p className="font-raleway font-normal text-sm text-gray-color">
            {t("slider.description")}
          </p>
        </div>
        <Slider />
      </section>
      <Next name="Next" link={VIEW_INSTRUCTIONS} width="w-1/2" />
    </>
  );
};

export default Welcome;
