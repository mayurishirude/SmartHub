import "./App.css";
import "./assets/css/style.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Teams from "./Pages/Teams";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Teams />
      <Footer />
    </>
  );
}

export default App;
