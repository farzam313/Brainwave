import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.2rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
