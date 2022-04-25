import PublicRoutes from './config/routes/PublicRoutes';
import AdminRoutes from './config/routes/AdminRoutes';

const App = () => {
  const currentUrl = window.location.pathname.split('/');
  console.log(currentUrl);

  return (
    <div
      className={
        currentUrl[1] !== 'admin'
          ? ' mobile:bg-mobile tablet:bg-cloud laptop:bg-cloud bg-no-repeat bg-center bg-cover bg-origin-content h-screen w-full'
          : 'w-full'
      }
    >
      <div className="max-w-screen-xl laptop:container laptop:mx-auto">
        {currentUrl[1] === 'admin' ? <AdminRoutes /> : <PublicRoutes />}
      </div>
    </div>
  );
};

export default App;
