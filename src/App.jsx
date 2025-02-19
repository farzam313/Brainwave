import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-n-1">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
