import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import HomeService from "../HomeService/HomeService";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Appbar></Appbar>
      <Banner></Banner>
      <About></About>
      <HomeService></HomeService>
      <Review></Review>
      <Footer></Footer>
    </>
  );
};

export default Home;
