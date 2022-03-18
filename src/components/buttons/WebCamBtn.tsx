import React, { MouseEventHandler } from "react";

interface WebStates {
  isLoading: boolean;
  isRecording: boolean;
  isFinished: boolean;
  videoCounter: number;
  videoAmount: number;
  startRecording: MouseEventHandler<HTMLButtonElement>;
  stopaRecording: MouseEventHandler<HTMLButtonElement>;
  finishAndSend: MouseEventHandler<HTMLButtonElement>;
  reRecord: MouseEventHandler<HTMLButtonElement>;
}

const WebCamBtn: React.FC<WebStates> = (props) => {
  return (
    <section className="buttons-section">
      {props.isLoading ? null : (
        <button id="btn-start" onClick={props.startRecording}>
          Comenzar grabación
        </button>
      )}

      {props.isRecording ? (
        <button id="btn-stop" onClick={props.stopaRecording}>
          Detener
        </button>
      ) : null}
      {props.isFinished ? (
        <>
          {props.videoCounter < props.videoAmount ? (
            <button
              id="btn-sendAndRecordNextVideo"
              onClick={props.finishAndSend}
            >
              Enviar y grabar pregunta {props.videoCounter + 1}
            </button>
          ) : (
            <button id="btn-finish" onClick={props.finishAndSend}>
              Enviar y finalizar entrevista
            </button>
          )}
          <button id="re-record" onClick={props.reRecord}>
            Volver a empezar
          </button>
        </>
      ) : null}
    </section>
  );
};

export default WebCamBtn;
