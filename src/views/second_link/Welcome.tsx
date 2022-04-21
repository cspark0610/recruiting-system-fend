import { useTranslation } from "react-i18next";
import Next from "../../components/buttons/Next";
import Lang from "../../components/extras/Lang";
import Slider from "../../components/extras/Slider";
import Header from "../../components/header/Header";
import { VIEW_INSTRUCTIONS } from "../../config/routes/paths";

const Welcome = () => {
  /*  */
  const { t } = useTranslation();

  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[177px] mobile:w-[161px] tablet:w-[154px]"
        height="laptop:h-[118px] mobile:h-[107px] tablet:h-[102px]"
      />
      <section className="grid place-items-center mobile:mt-10 tablet:mt-0 laptop:mt-0">
        <h2 className="font-semibold mobile:text-2xl laptop:text-2xl text-cyan-color">
          {t("welcome")}
        </h2>
        <div className="mt-5">
          <p className="font-raleway font-normal mobile:text-xs laptop:text-xs text-gray-color">
            {t("slider.description")}
          </p>
        </div>
        <Slider />
        <Next
          name={t("submit_button.name")}
          link={VIEW_INSTRUCTIONS}
          width="mobile:w-32"
        />
      </section>
    </>
  );
};

export default Welcome;
