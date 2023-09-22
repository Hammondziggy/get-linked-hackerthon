import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="relative text-white font-serif text-2xl bg-background h-screen">
      {/* <Navbar /> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
