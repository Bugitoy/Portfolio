import ButtonGradient from "../assets/App/Others/ButtonGradient";
import Footer from "../components/App/Footer/Footer";
import Header from "../components/App/Header/Header";
import Hero from "../components/About/Hero/Hero";
import Experience from "../components/About/Experience/Experience";
import Features from "../components/About/Features/Features";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Experience/>
        <Features/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
