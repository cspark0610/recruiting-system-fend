import { useCallback, useEffect, useRef, useState } from "react";
import CameraOn from "./CameraOn";
import { BsFillRecordFill, BsPause } from "react-icons/bs";

const StreamRecord: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const mediaRecorderRef = useRef<any>(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!capturing) {
        handleDownload();
      }
    }
  }, [capturing]);

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
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div>
      <CameraOn webcamRef={webcamRef} />
      {capturing ? (
        <div className="mt-5">
          <button
            className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-9 shadow-lg border border-gray-color mt-5"
            onClick={handleStopCaptureClick}
          >
            <div className="flex items-center">
              Stop &nbsp; <BsPause className="text-gray-color w-5 h-5" />
            </div>
          </button>
        </div>
      ) : (
        <div className="mt-5">
          <button
            className="cursor-pointer rounded-2xl bg-white text-cyan-color font-bold text-sm py-3 px-9 shadow-lg border border-cyan-color mt-5"
            onClick={handleStartCaptureClick}
          >
            <div className="flex items-center">
              Record &nbsp;{" "}
              <BsFillRecordFill className="text-red-color w-5 h-5" />
            </div>
          </button>
        </div>
      )}
      {recordedChunks.length > 0 && (
        <div>
          <button
            className="cursor-pointer rounded-2xl bg-white text-gray-color font-bold text-sm py-3 px-9 shadow-lg border border-red-color mt-5"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default StreamRecord;
