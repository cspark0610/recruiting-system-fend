import Header from "./components/header/Header";
import AppRoute from "./config/routes/AppRoute";

const App = () => {
  return (
    <div className="bg-cloud bg-no-repeat bg-center bg-cover h-screen">
      <Header />
      <div className="container mx-auto my-5">
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
