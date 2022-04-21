import Header from './components/header/Header';
import AppRoute from './config/routes/AppRoute';

const App = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center bg-cover h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto 2xl:max-w-screen-2xl">
        <div className="container mx-auto my-5">
          <AppRoute />
        </div>
      </div>
    </div>
  );
};

export default App;
