import Webcam from "react-webcam";

interface Props {
  webcamRef?: any;
}

const CameraOn: React.FC<Props> = ({ webcamRef }) => {
  return (
    <div className="bg-light-color border-light-color rounded-2xl h-72">
      <div className="z-10">
        <Webcam audio={false} ref={webcamRef} height={320} width={400} />
      </div>
    </div>
  );
};

export default CameraOn;
