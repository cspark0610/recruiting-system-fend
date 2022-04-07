import { useCallback, useEffect, useRef, useState } from "react";
import { MdRestartAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { VIEW_VIDEO_COMPLETED } from "../../config/routes/paths";
import CameraOn from "./CameraOn";
import Start from "./control/Start";
import Stop from "./control/Stop";

const Stream = () => {
  /*  */
  const webcamRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const isInitialMount = useRef(true);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(VIEW_VIDEO_COMPLETED);
  };

  /* useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!capturing) {
        handleDownload();
      }
    }
  }, [capturing]); */

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm;codecs=vp9,opus",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm;codecs=vp9,opus",
      });
      const url = URL.createObjectURL(blob);
      console.log("URL Video: ", url);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = "video-interview.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div>
      <CameraOn webcamRef={webcamRef} />
      {capturing ? (
        <Stop onClick={handleStopCaptureClick} />
      ) : recordedChunks.length === 0 ? (
        <Start onClick={handleStartCaptureClick} />
      ) : (
        <Start classes="hidden" onClick={handleStartCaptureClick} />
      )}
      {recordedChunks.length > 0 && (
        <div className="flex flex-row justify-start mt-5">
          <button
            className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-9 shadow-lg border border-gray-color mt-5"
            /* onClick={handleDownload} */
          >
            <div className="flex items-center">
              Remake &nbsp; <MdRestartAlt className="text-gray-color w-5 h-5" />
            </div>
          </button>

          <button
            className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-9 shadow-lg border border-cyan-color mt-5 ml-5"
            onClick={onNavigate}
          >
            Save & Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Stream;
