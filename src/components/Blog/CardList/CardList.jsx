import Section from "./Section/Section";
import Card from "./Card/Card";

const CardList = () => {

  return (
    <Section
      className="pt-[2rem]"
      crosses
      crossesOffset=""
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <h1 className="mb-[60px] mt-[-50px] lg:mt-[0] lg:mb-[30px] text-3xl ml-[0] sm: mx-auto sm: text-center md: mx-auto md: text-center 
                      lg:ml-[65px] lg:text-left">
          Recent Posts
        </h1>
        <div className="">
            <Card />
        </div>
      </div>
    </Section>
  );
};

export default CardList;