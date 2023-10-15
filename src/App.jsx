import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomeContainer from "./Hooks/HomeContainer";


function App() {
  return (
    <>
      <Navbar/>
      <HomeContainer>
        <Outlet />
        <div className="mt-28 lg:mt-0">
          <Footer />
        </div>
      </HomeContainer>
    </>
  );
}

export default App;
