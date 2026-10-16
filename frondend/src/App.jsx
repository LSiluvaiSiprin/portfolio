import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Education from "./pages/Edu";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import "./styles/Global.css";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />

      <Toaster position="top-right"/>

      <main>
        <Home />

        <About />

        <Skills />

        <Project />

        <Education />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
