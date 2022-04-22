import "./../../assets/scss/CircleBar.scss";

interface Props {
  classes: string;
}

const QskInterview: React.FC<Props> = ({ classes }) => {
  return (
    <div className={`${classes} progress-bar`}>
      <div className="step flex flex-row items-center">
        <div className="circle active-circle">
          <span>1</span>
        </div>
        <div>
          <span className="text-gray-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
      <div className="step flex flex-row items-center">
        <div className="circle">
          <span>2</span>
        </div>
        <div>
          <span className="text-gray-color/40">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
      <div className="step flex flex-row items-center">
        <div className="circle">
          <span>3</span>
        </div>
        <div>
          <span className="text-gray-color/40">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
      <div className="step flex flex-row items-center">
        <div className="circle">
          <span>4</span>
        </div>
        <div>
          <span className="text-gray-color/40">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
      <div className="step flex flex-row items-center">
        <div className="circle">
          <span>5</span>
        </div>
        <div>
          <span className="text-gray-color/40">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
      <div className="step flex flex-row items-center">
        <div className="circle">
          <span>6</span>
        </div>
        <div>
          <span className="text-gray-color/40">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </span>
        </div>
      </div>
    </div>
  );
};

export default QskInterview;
