import Section from "../../Section";
import { SmoothScrollHero } from "../Highlights/SmoothHero";

const Timeline = () => {
  return (
    <Section
      className="-mt-[6.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >

        <div className="container relative">
            <SmoothScrollHero />
        </div>
    </Section>
  );
};

export default Timeline;