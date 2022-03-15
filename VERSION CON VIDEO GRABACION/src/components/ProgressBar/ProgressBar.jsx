import style from '../InfoUpload/InfoUpload.module.css';

export default function ProgressBar({ progress }) {
  return (
    <div className="progress" id={style.progressBar}>
      {progress <= 0 ? null : (
        <div
          className="progress-bar  bg-success"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      )}
    </div>
  );
}
