import React from "react";
import { Link } from "react-router-dom";

interface TitleProps {
  link: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <img
          src="https://fulltimeforce.com/wp-content/themes/ftf-2020/images/fulltimeforce-logo.svg"
          alt="fulltimeforce-logo"
          className="w-28 -mb-4"
        />
      </Link>
    </div>
  );
};

export default Title;
