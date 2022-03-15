import { useEffect, useState, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Buttons from '../Buttons/Buttons';
import swal from 'sweetalert2';
import './VideoRecorder.css';

export default function VideoRecorder({ keys }) {
  // booleans states
  const [isLoading, setIsLoading] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  // timer
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [intervalWatch, setIntervalWatch] = useState(undefined);

  // video states
  const videoData = keys.video_data;
  const videoLength = 2;
  const videoAmount = videoData.length;
  const [videoCounter, setVideoCounter] = useState(1);
  const [videoPreviewLink, setVideoPreviewLink] = useState('');

  // refs
  const videoRef = useRef(null);
  const videoChunks = useRef([]);
  const streamRef = useRef(null);
  const streamRecorderRef = useRef(null);

  let updatedMinutes = time.minutes;
  let updatedSeconds = time.seconds - 1;

  const resetAppState = () => {
    setIsRecording(false);
    setIsUploading(false);
    setIsUploaded(false);
    setIsFinished(false);

    document.getElementById('btn-start').style.display = 'flex';

    setTime({ minutes: 0, seconds: 0 });
    videoChunks.current = [];
  };

  const startTimer = () => {
    updatedSeconds++;

    if (updatedSeconds > 59) {
      updatedMinutes++;
      updatedSeconds = 0;
    }

    if (updatedMinutes === videoLength) {
      stopaRecording();
    }

    return setTime({ minutes: updatedMinutes, seconds: updatedSeconds });
  };

  const startRecording = async () => {
    streamRecorderRef.current = new MediaRecorder(streamRef.current);
    streamRecorderRef.current.start();

    try {
      await fetch(`/url/delete/${keys.url_id}`, {
        method: 'delete',
      });
    } catch (e) {
      console.error(e);
    }

    setIsRecording(true);

    startTimer();
    setIntervalWatch(setInterval(startTimer, 1000));

    streamRecorderRef.current.ondataavailable = (e) => {
      if (videoChunks.current) {
        videoChunks.current.push(e.data);
      }
    };

    document.getElementById('btn-start').style.display = 'none';

    document.getElementById('watch-video').click();
  };

  const stopaRecording = () => {
    clearInterval(intervalWatch);

    streamRecorderRef.current.stop();

    setIsRecording(false);
    setIsFinished(true);
  };

  const finishAndSend = async () => {
    if (videoCounter === videoAmount) {
      const willSave = await swal.fire({
        title: '¡Atención!',
        text: 'Estas a punto de enviar tu último video. ¿Deseas continuar?',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'green',
        icon: 'warning',
      });

      if (willSave.isConfirmed) {
        const blob = new Blob(videoChunks.current, { type: 'video/mp4' });

        const formData = new FormData();
        formData.append('video', blob);
        formData.append('question_id', videoData[videoCounter - 1].question_id);
        formData.append(
          'question_title',
          videoData[videoCounter - 1].question_title,
        );
        setIsUploading(true);

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }

        swal.fire({
          text: 'Enviando video, por favor, espera...',
          icon: 'warning',
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          willOpen: () => {
            swal.showLoading();
          },
        });

        try {
          await fetch(`/video/upload/${keys.candidate_id}`, {
            method: 'post',
            body: formData,
          });

          await swal.fire({
            text: '!Entrevista finalizada con éxito!',
            icon: 'success',
            showConfirmButton: true,
          });

          setIsUploaded(true);
          setVideoCounter(videoCounter + 1);
          videoChunks.current = [];
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      const willSave = await swal.fire({
        title: '¡Atención!',
        text: 'Estas a punto de enviar tu video. ¿Deseas continuar?',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'green',
        icon: 'warning',
      });

      if (willSave.isConfirmed) {
        const blob = new Blob(videoChunks.current, { type: 'video/mp4' });

        const formData = new FormData();
        formData.append('video', blob);
        formData.append('question_id', videoData[videoCounter - 1].question_id);
        formData.append(
          'question_title',
          videoData[videoCounter - 1].question_title,
        );

        swal.fire({
          text: 'Enviando video, por favor, espera...',
          icon: 'warning',
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          willOpen: () => {
            swal.showLoading();
          },
        });

        try {
          await fetch(`/video/upload/${keys.candidate_id}`, {
            method: 'post',
            body: formData,
          });

          await swal.fire({
            text: '!Video enviado con éxito!',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Grabar siguiente pregunta',
          });

          resetAppState();
          setVideoCounter(videoCounter + 1);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const reRecord = async () => {
    const willReRecord = await swal.fire({
      title: '¡Atención!',
      text: 'Perderas el video anterior. ¿Deseas continuar?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'red',
      icon: 'warning',
    });

    if (willReRecord.isConfirmed) {
      resetAppState();
    }
  };

  // set preview video to watch
  useEffect(() => {
    if (isRecording) {
      return;
    }

    if (videoChunks.current.length === 0) {
      return;
    }

    const videoPreview = new Blob(videoChunks.current, { type: 'video/mp4' });

    setVideoPreviewLink(window.URL.createObjectURL(videoPreview));
    document.getElementById('watch-preview').click();
  }, [isRecording]);

  // obtaining user permission to use mic and camera
  useEffect(() => {
    async function prepareStream() {
      function gotStream(stream) {
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsLoading(false);
        }
      }

      async function getStream() {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }

        const permissions = await swal.fire({
          text: 'Debes permitir el acceso a tu camara y microfono para poder continuar',
          icon: 'warning',
          allowEnterKey: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
        });

        if (permissions.isConfirmed) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: true,
              video: {
                width: { exact: 640 },
                height: { exact: 480 },
              },
            });
            gotStream(stream);
          } catch (e) {
            if (e.message.includes('found')) {
              swal.fire({
                title: 'Error',
                text: 'Dispositivos de audio y/o video no encontrados',
                showConfirmButton: true,
                icon: 'error',
              });
            } else {
              swal.fire({
                title: 'Error',
                text: 'Acceso al micrófono y/o cámara denegado',
                showConfirmButton: true,
                icon: 'error',
              });
            }
          }
        }
      }
      await getStream();
    }
    prepareStream();
  }, []);

  return (
    <div>
      <Header />
      {!isUploading ? (
        <div>
          <main className="main-container">
            <video muted id="video" autoPlay ref={videoRef}></video>
            {isLoading ? <h4 id="loading-image">Iniciando cámara...</h4> : null}

            {isRecording ? (
              <>
                <section className="container">
                  <p>
                    <span id="minutes">
                      {time.minutes >= 10 ? time.minutes : '0' + time.minutes}
                    </span>{' '}
                    :{' '}
                    <span id="seconds">
                      {time.seconds >= 10 ? time.seconds : '0' + time.seconds}
                    </span>
                  </p>
                  <p id="recording-info">
                    - La duración del video es de máximo {videoLength} minutos -
                  </p>
                </section>
                <section
                  className="question-container"
                  key={videoData[videoCounter - 1].question_id}
                >
                  <p>
                    <span>
                      Pregunta {videoData[videoCounter - 1].question_id} -{' '}
                      {videoData[videoCounter - 1].question_title}
                    </span>
                  </p>
                </section>
              </>
            ) : null}
          </main>
          <Buttons
            isLoading={isLoading}
            isRecording={isRecording}
            isFinished={isFinished}
            startRecording={startRecording}
            stopaRecording={stopaRecording}
            finishAndSend={finishAndSend}
            reRecord={reRecord}
            videoCounter={videoCounter}
            videoAmount={videoAmount}
          />
        </div>
      ) : null}

      <a href="#video-preview" id="watch-preview">
        watch
      </a>
      <a href="#video" id="watch-video">
        watch
      </a>

      {isUploaded ? (
        <section className="info">
          <p id="info-text">
            ¡Gracias por utilizar nuestra plataforma!. En estos dias nos
            estaremos contactando contigo para actualizarte sobre tu proceso de
            selección.
          </p>
          <p>Por favor, mantente atento a tu correo electrónico.</p>
        </section>
      ) : null}

      {isFinished && !isUploading ? (
        <section className="video-preview-container">
          <h3 id="video-preview-header">Previsualizar video</h3>
          <video id="video-preview" controls src={videoPreviewLink}></video>
        </section>
      ) : null}
      <Footer />
    </div>
  );
}
