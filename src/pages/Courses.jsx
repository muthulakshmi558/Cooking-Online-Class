import React from "react";
import Navbar from "../components/Navbar";
import CoursesSection from "../components/CoursesSection";
import CoursesSection2 from "../components/CoursesSection2"
import OfferBanner from "../components/OfferBanner"
import CourseTeaserSection from "../components/CourseTeaserSection"
import Footer from "../components/Footer"


const Courses = () => {
  return (
    <>
    <Navbar />
     <CoursesSection />
     <CoursesSection2 />
     <OfferBanner/>
     <CourseTeaserSection />
     <Footer />

    </>
  );
};

export default Courses;
