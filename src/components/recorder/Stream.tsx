import { useCallback, useEffect, useRef, useState } from "react";
import { BsFillRecordFill } from "react-icons/bs";
import { MdRestartAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { VIEW_VIDEO_COMPLETED } from "../../config/routes/paths";
import CameraOn from "./CameraOn";
import Start from "./control/Start";
import Pause from "./control/Pause";
import "./../../assets/scss/Blink.scss";
import Resume from "./control/Resume";

const Stream = () => {
  /*  */
  const webcamRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const isInitialMount = useRef(true);

  const [capturing, setCapturing] = useState(false);
  const [pausing, setPausing] = useState(false);

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
    setPausing(false);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm;codecs=vp9,opus",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handlePauseCaptureClick = useCallback(() => {
    setPausing(true);
    mediaRecorderRef.current.pause();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleResumeCaptureClick = useCallback(() => {
    setCapturing(true);
    setPausing(false);
    mediaRecorderRef.current.resume();
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

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

  console.log("grabación:", recordedChunks);

  return (
    <div className="relative">
      {/* ANIMATION OF RECORDING */}
      <div
        className={`${
          capturing ? "block" : "hidden"
        } absolute top-[18px] right-[18px] z-10`}
      >
        <BsFillRecordFill className="w-[20px] h-[20px] text-red-color blink-record" />
      </div>

      {/* CAMERA */}
      <CameraOn webcamRef={webcamRef} />

      {/* VALIDATION IF RECORDING */}
      {capturing ? (
        <Pause onClick={handlePauseCaptureClick} />
      ) : pausing ? (
        <Resume onClick={handleResumeCaptureClick} />
      ) : recordedChunks.length === 0 ? (
        <Start onClick={handleStartCaptureClick} />
      ) : (
        <Start classes="hidden" onClick={handleStartCaptureClick} />
      )}

      {/* VALIDATION WHEN RECORDING STOP */}
      {recordedChunks.length > 0 && (
        <div className="flex flex-row justify-start font-raleway w-full mt-5">
          <button
            className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-7 laptop:w-[145px] laptop:h-[54px] shadow-lg border border-gray-color mt-5"
            /* onClick={handleDownload} */
          >
            <div className="flex items-center justify-between">
              Remake &nbsp;{" "}
              <MdRestartAlt className="text-gray-color w-[20px] h-[20px]" />
            </div>
          </button>

          <button
            className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-7 laptop:w-[172px] laptop:h-[54px] shadow-lg border border-cyan-color mt-5 ml-5"
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
