import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Achievement from "./Achievement";
import Volunteering from "./Volunteering";
const Myportfolio = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Volunteering />
      <Projects />
      <Achievement />
      <Footer />
    </div>
  );
};

export default Myportfolio;
