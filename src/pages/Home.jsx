import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CoursesSection from "../components/CoursesSection";
import CoursesSection2 from "../components/CoursesSection2"
import OfferBanner from "../components/OfferBanner"
import FAQSection from "../components/FAQSection"
import CourseTeaserSection from "../components/CourseTeaserSection"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
     <CoursesSection />
     <CoursesSection2 />
     <OfferBanner/>
     <FAQSection />
     <CourseTeaserSection />
     <Footer />

    </>
  );
};

export default Home;
