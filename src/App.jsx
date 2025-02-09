import ButtonGradient from "./assets/App/Others/ButtonGradient";
import Benefits from "./components/App/Benefits/Benefits";
import Collaboration from "./components/App/Collaboration/Collaboration";
import Footer from "./components/App/Footer/Footer";
import Header from "./components/App/Header/Header";
import Hero from "./components/App/Hero/Hero";
import Pricing from "./components/App/Pricing/Pricing";
import Roadmap from "./components/App/Roadmap/Roadmap";
import Services from "./components/App/Services/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
