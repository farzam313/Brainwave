import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
