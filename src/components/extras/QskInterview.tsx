import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IQuestion } from '../../redux/positions/types/data';
import { State } from '../../redux/store/store';
import './../../assets/scss/CircleBar.scss';

interface Props {
  classes: string;
}

const QskInterview: React.FC<Props> = ({ classes }) => {
  /*  */
  const [style, setStyle] = useState('');

  const currentCandidateQuestions = useSelector(
    (state: State) => state.info.detail.videos_question_list,
  );

  return (
    <div className={`${classes} progress-bar mobile:mx-5 laptop:mx-0`}>
      {currentCandidateQuestions.map((question: IQuestion) => (
        <div
          key={question.question_id}
          className={`${style} step flex flex-row items-center item-${question.question_id}`}
        >
          <div className="circle">
            <span>{question.question_id}</span>
          </div>
          <div>
            <span>{question.question_title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QskInterview;
