import React, { useState } from "react";
import "../../assets/scss/EmployeeDetails.scss";
import ConclusionSection from "./ConclusionSection";
import GeneralDetails from "./GeneralDetails";
import VideoSection from "./VideoSection";

const TabInformation: React.FC = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="flex flex-row w-1/2">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          General Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Videos
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Conclusion
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <GeneralDetails />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <VideoSection />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ConclusionSection />
        </div>
      </div>
    </div>
  );
};

export default TabInformation;
