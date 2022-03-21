import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { BsFillRecordFill, BsPause } from "react-icons/bs";

const VideoStream: React.FC = () => {
  const webcamRef = React.useRef<any>(null);
  const mediaRecorderRef = React.useRef<any>(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const isInitialMount = React.useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!capturing) {
        console.log("running handleDownload");
        /* handleDownload(); */
      }
    }
  }, [capturing]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  /* const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const video = document.getElementById("video-replay");
      video.src = url;
    }
  }, [recordedChunks]); */

  return (
    <div>
      <div>
        <Webcam audio={false} ref={webcamRef} height={320} width={400} />
        {/* <video id="video-replay" height="400" width="500" controls></video> */}
      </div>
      <div>
        {capturing ? (
          <button
            className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-9 shadow-lg border border-gray-color mt-5"
            onClick={handleStopCaptureClick}
          >
            <div className="flex items-center">
              Pause &nbsp; <BsPause className="text-gray-color w-5 h-5" />
            </div>
          </button>
        ) : (
          <button
            className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-9 shadow-lg border border-cyan-color mt-5"
            onClick={handleStartCaptureClick}
          >
            <div className="flex items-center">
              Record &nbsp;{" "}
              <BsFillRecordFill className="text-red-color w-5 h-5" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoStream;
