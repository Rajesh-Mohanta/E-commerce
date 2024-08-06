import React from "react";
import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offer from "../Components/Offer/Offer";
import Popular from "../Components/Popular/Popular";
// import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  );
};

export default Shop;
