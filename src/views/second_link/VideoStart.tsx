import Back from "../../components/buttons/Back";
import QskInterview from "../../components/extras/QskInterview";
import Stream from "../../components/recorder/Stream";
import { VIEW_DETAILS } from "../../config/routes/paths";

const VideoStart = () => {
  return (
    <>
      <Back link={VIEW_DETAILS} />
      <div className="grid justify-items-center">
        <section className="grid place-items-center content-center gap-24 grid-rows-1 md:grid-cols-2 mt-10">
          <div>
            <Stream />
          </div>
          <div>
            <QskInterview />
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoStart;
