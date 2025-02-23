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
        <h1 className = "my-[50px] ml-[65px] sm: ml-[40px] text-3xl">Recent Posts</h1>
        <div className="">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </Section>
  );
};

export default CardList;