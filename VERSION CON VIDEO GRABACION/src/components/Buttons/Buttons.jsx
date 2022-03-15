import './Buttons.css';

export default function Buttons({
  isLoading,
  isRecording,
  isFinished,
  videoCounter,
  videoAmount,
  startRecording,
  stopaRecording,
  finishAndSend,
  reRecord,
}) {
  return (
    <section className="buttons-section">
      {isLoading ? null : (
        <button id="btn-start" onClick={startRecording}>
          Comenzar grabación
        </button>
      )}

      {isRecording ? (
        <button id="btn-stop" onClick={stopaRecording}>
          Detener
        </button>
      ) : null}
      {isFinished ? (
        <>
          {videoCounter < videoAmount ? (
            <button id="btn-sendAndRecordNextVideo" onClick={finishAndSend}>
              Enviar y grabar pregunta {videoCounter + 1}
            </button>
          ) : (
            <button id="btn-finish" onClick={finishAndSend}>
              Enviar y finalizar entrevista
            </button>
          )}
          <button id="re-record" onClick={reRecord}>
            Volver a empezar
          </button>
        </>
      ) : null}
    </section>
  );
}
