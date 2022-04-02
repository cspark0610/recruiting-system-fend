import BackButton from "../../components/buttons/BackButton";
import NextButton from "../../components/buttons/NextButton";
import CameraOn from "../../components/video/CameraOn";

const Details: React.FC = () => {
  return (
    <>
      <BackButton link="/welcome/required-steps" />
      <div className="grid justify-items-center ">
        <section className="grid place-items-center content-center gap-28 grid-rows-1 md:grid-cols-2 mt-10">
          <div>
            <CameraOn />
          </div>
          <div className="bg-white">
            <h2 className="font-raleway font-semibold text-cyan-color text-2xl">
              Time to Record your videos!
            </h2>
            <p className="font-raleway font-normal text-cyan-color text-xl mt-2">
              Remember that you will have 2' to
              <br /> record your answers
            </p>
            <ul className="list-disc font-raleway text-gray-color text-sm ml-5 mt-5">
              <li className="my-2">
                Make sure you have a stable internet connection.
              </li>
              <li className="my-2">
                Feel comfortable and free to express yourself as you wish.
              </li>
              <li className="my-2">
                the Questions will be shown ones you start each video.
              </li>
              <li className="my-2">
                Check your videos and continue if you’re sure with the result
              </li>
            </ul>
            <div className="grid place-content-start w-full">
              <NextButton
                name="Get Started"
                link="/welcome/before-starting"
                width="w-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Details;
