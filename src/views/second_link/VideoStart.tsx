import Lang from "../../components/extras/Lang";
import QskInterview from "../../components/extras/QskInterview";
import Header from "../../components/header/Header";
import Stream from "../../components/recorder/Stream";

const VideoStart = () => {
  return (
    <>
      <Lang />
      <Header
        width="laptop:w-[97.5px] mobile:w-[113px] tablet:w-[154px]"
        height="laptop:h-[65px] mobile:h-[75px] tablet:h-[102px]"
      />
      <div className="grid justify-items-center">
        <section className="grid justify-items-center content-center mobile:gap-10 laptop:gap-10 mobile:grid-rows-1 laptop:grid-cols-2 md:px-5 mt-10">
          <div>
            <Stream />
          </div>
          <div>
            <QskInterview classes="text-[15px]" />
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoStart;
