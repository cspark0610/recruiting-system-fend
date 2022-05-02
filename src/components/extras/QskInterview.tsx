import { useState } from "react";
import questions from "./../../assets/json/Questions.json";
import "./../../assets/scss/CircleBar.scss";

interface Props {
  classes: string;
}

const QskInterview: React.FC<Props> = ({ classes }) => {
  /*  */
  const [style, setStyle] = useState("");

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
