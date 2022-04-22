import Header from './components/header/Header';
import AppRoute from './config/routes/AppRoute';
import AppRoute from './config/routes/AppRoute';


const App = () => {
  return (
    <div className="mobile:bg-mobile tablet:bg-cloud laptop:bg-cloud bg-no-repeat bg-center bg-cover bg-origin-content h-screen w-full">
      <div className="max-w-screen-xl laptop:container laptop:mx-auto">
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
