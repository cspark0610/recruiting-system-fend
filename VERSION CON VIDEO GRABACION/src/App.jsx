import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import VideoRecorder from './components/VideoRecorder/VideoRecorder';
import InfoUpload from './components/InfoUpload/InfoUpload';
import InfoUploaded from './components/InfoUploaded/InfoUploaded';
import NotFound from './views/404';

function App() {
  const [videoKeys, setVideoKeys] = useState(undefined);

  const getKeys = async () => {
    try {
      const keys = await fetch(`/video-key`);
      const keysFormatted = await keys.json();

      setVideoKeys(keysFormatted);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getKeys();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info-upload" element={<InfoUpload keys={videoKeys} />} />
        <Route path="/info-uploaded" element={<InfoUploaded />} />
        <Route
          path="/video-recording"
          element={<VideoRecorder keys={videoKeys} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
