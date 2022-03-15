import React from "react";
import ReactPlayer from "react-player/youtube";

interface VideoProps {
  url: string;
  controls: boolean;
}

const Video: React.FC<VideoProps> = (props) => {
  return (
    <div className="container mt-3">
      <ReactPlayer
        url={props.url}
        width="400px"
        height="320px"
        controls={props.controls}
      />
    </div>
  );
};

export default Video;
