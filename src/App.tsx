/* React router */
import { Routes, Route } from "react-router-dom";
import FrmInfoEdit from "./components/forms/FrmInfoEdit";

/* Components */
import Header from "./components/header/Header";
import NotFound from "./views/Error/NotFound";
import Data from "./views/FirstLink/Data";
import ThankYou from "./views/FirstLink/ThankYou";
import Details from "./views/SecondLink/Details";
import Instructions from "./views/SecondLink/Instructions";
import Required from "./views/SecondLink/Required";
import StartVideo from "./views/SecondLink/StartVideo";
import VideoCompleted from "./views/SecondLink/VideoCompleted";
import Welcome from "./views/SecondLink/Welcome";

const App: React.FC = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center h-screen">
      <Header />
      <div className="container mx-auto my-5">
        <Routes>
          <Route path="/" element={<Data />}></Route>
          <Route
            path="/home/thank-you"
            element={
              <ThankYou
                title="Your application has been sent!"
                firstline="We appreciate your time and interest,"
                secondline="We will be comunicating with you."
              />
            }
          ></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route
            path="/welcome/instructions"
            element={<Instructions />}
          ></Route>
          <Route path="/welcome/required-steps" element={<Required />}></Route>
          <Route path="/welcome/details" element={<Details />}></Route>
          <Route
            path="/welcome/before-starting"
            element={<StartVideo />}
          ></Route>
          <Route
            path="/welcome/video-completed"
            element={<VideoCompleted />}
          ></Route>
          <Route
            path="/welcome/required-steps/edit"
            element={<FrmInfoEdit />}
          ></Route>
          <Route
            path="/welcome/thank-you"
            element={
              <ThankYou
                title="Thank You!"
                firstline="Thank you for applying. We will evaluate your application"
                secondline="and will contact you about what's next."
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
