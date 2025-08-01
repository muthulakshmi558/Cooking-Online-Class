import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection"
import AboutOurStory from "../components/AboutOurStory"
import WhatWeOffer from "../components/WhatWeOffer"
import OfferBanner from "../components/OfferBanner"
import AboutOurValues from "../components/AboutOurValues"
import AboutTextSection  from "../components/AboutTextSection"
import CourseTeaserSection from "../components/CourseTeaserSection"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
    <Navbar />
    < AboutSection/>
    <AboutTextSection />
    <AboutOurStory />
    <WhatWeOffer />
    <OfferBanner/>
    <AboutOurValues />
     <CourseTeaserSection />
     

     
     <Footer />

    </>
  );
};

export default Home;
