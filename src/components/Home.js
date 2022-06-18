import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sliderr from "./Sliderr";
import Info from "./Info";
import Work from "./Work";
import Store from "./Store";
import Footer from "./Footer";
import About from "./About";


function Home() {
    return (
      <div  className="App">
        <Navbar />
        <Hero />
        <Sliderr />
        <Info />
        <Work />
        <Store />
        <Footer />
        
        
      </div>
    );
  }
  
  
  export default Home;
  