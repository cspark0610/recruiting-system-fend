import { useState } from "react";

export function UseCounter() {
  const [time, setTime] = useState({ minute: 0, second: 0 });
  let [progress, setProgress] = useState(0);

  let timer: any;

  const startTimer = () => {
    timer = setInterval(countDown, 1000);
  };

  let updatedS = time.second;
  let updatedM = time.minute;

  const countDown = () => {
    if (updatedM === 2) {
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    setProgress((progress += 1));
    return setTime({ minute: updatedM, second: updatedS });
  };

  const pauseTimer = () => {
    clearInterval(timer);
  };

  const resumeTimer = () => startTimer();

  const resetTimer = () => {
    setTime({ minute: 0, second: 0 });
  };

  return {
    time,
    progress,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  };
}
