import "./App.css";
import "./assets/css/style.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Teams from "./Pages/Teams";
import Courses from "./Pages/Courses";
import Gototopbutton from "./Components/Gototopbutton";
function App() {
  return (
    <div className="custom-scrollbar">
      <Navbar />
      <AboutUs />
      <Services />
      <Courses />
      <Teams />
      <Gototopbutton />
      <Footer />
    </div>
  );
}

export default App;
