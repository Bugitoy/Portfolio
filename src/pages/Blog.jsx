import React from "react";
import Header from "../components/App/Header/Header";
import Footer from "../components/App/Footer/Footer";
import ButtonGradient from "../assets/App/Others/ButtonGradient";
import Featured from "../components/Blog/Featured/Featured";
import CategoryList from "../components/Blog/CategoryList/CategoryList";
import CardList from "../components/Blog/CardList/CardList";
import Menu from "../components/Blog/Menu/Menu";


const Blog = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Featured />
          <CategoryList />
          <div className="container flex ">
            <div className="flex-2">
              <CardList />
            </div>
            <div className="flex-1">
              <Menu />
            </div>
          </div>
          <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Blog;
