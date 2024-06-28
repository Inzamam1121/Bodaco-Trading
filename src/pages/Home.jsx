import React from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import SIA from "../components/SIA";
import Values from "../components/Values";
import Services from "../components/Services";
import Product from "../components/Product";
import PurchaseProcess from "../components/PurchaseProcess";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Ripening from "../components/Ripening ";
import Natural from "../components/Natural";
import Banner from "../components/Banner";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div id="about">
        <Welcome />
      </div>
      <SIA />
      <Values />
      <div id="service">
        <Services />
      </div>
      <div id="product">
        <Product />
      </div>
      <PurchaseProcess />
      <Natural />
      <Ripening />
      <div id="contact">
        <Contact />
      </div>
      <Footer />

    </div>
  );
};

export default Home;
