import BackButton from "../../components/buttons/BackButton";
import QuestionsInterview from "../../components/extra/QuestionsInterview";
import StreamRecord from "../../components/video/StreamRecord";

const StartVideo: React.FC = () => {
  return (
    <>
      <BackButton link="/welcome/details" />
      <div className="grid justify-items-center">
        <section className="grid place-items-center content-center gap-24 grid-rows-1 md:grid-cols-2 mt-10">
          <div>
            <StreamRecord />
          </div>
          <div>
            <QuestionsInterview />
          </div>
        </section>
      </div>
    </>
  );
};

export default StartVideo;
