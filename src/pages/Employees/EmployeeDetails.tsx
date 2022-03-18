import React from "react";
import TabInformation from "../../components/tabs/TabInformation";
import Title from "../../components/title/Title";

const EmployeeDetails: React.FC = () => {
  return (
    <div className="container mx-auto grid place-items-center h-screen bg-clouds bg-no-repeat bg-cover bg-center">
      <Title />
      <TabInformation />
    </div>
  );
};

export default EmployeeDetails;
