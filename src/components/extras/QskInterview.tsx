import { useEffect, useState } from "react";
import questions from "./../../assets/json/Questions.json";
import "./../../assets/scss/CircleBar.scss";

interface Props {
  classes: string;
}

const QskInterview: React.FC<Props> = ({ classes }) => {
  /*  */
  const [style, setStyle] = useState("");
  const [seconds, setseconds] = useState(0);

  /* useEffect(() => {
    const interval = setInterval(() => {
      document
        .querySelector(`.item-${seconds - 1}`)
        ?.classList.remove("active");
      document.querySelector(`.item-${seconds}`)?.classList.add("active");
      setseconds((seconds) => seconds + 1);
      if (seconds === 5) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]); */

  /* console.log("seconds:", seconds); */

  return (
    <div className={`${classes} progress-bar mobile:mx-5 laptop:mx-0`}>
      {questions.map((question, idex) => (
        <div
          key={question.id}
          className={`${style} step flex flex-row items-center item-${idex}`}
        >
          <div className="circle">
            <span>{question.id}</span>
          </div>
          <div>
            <span>{question.question}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QskInterview;
