import { StreetCrossing, TennisMan, twospaceman, Vibing} from "../../../assets/Blog";
import Section from "./Design/Design";
import MenuPosts from "./MenuPosts/MenuPosts";
import MenuCategories from "./MenuCategories/MenuCategories";

const Menu = () => {

  return (
    <Section
      className="pt-[2rem]"
      crosses
      crossesOffset=""
      customPaddings
      id="hero"
    >
      <div className="container flex-2 mt-[60px]">
        <h2 className="text-pink-300 text-4xl font-[500]">What's Hot</h2>
        <h1 className="text-xl">Most Popular</h1>

        <MenuPosts/>

        <h2 className="">Discover by topic</h2>
        <h1 className="">Categories</h1>
        
        <MenuCategories />

        <h2 className="">Chosen by the editor</h2>
        <h1 className="">Editors Pick</h1>

        <MenuPosts/>
        
      </div>
    </Section>
  );
};

export default Menu;