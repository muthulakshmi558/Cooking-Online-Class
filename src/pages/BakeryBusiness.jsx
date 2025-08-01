import React from "react";
import Navbar from "../components/Navbar";
import BakeryEnrollment from "../components/BakeryEnrollment"
import CourseFeatures from "../components/CourseFeatures"
import CourseTeaserSection from "../components/CourseTeaserSection"
import Footer from "../components/Footer"


const BakeryPage = () => {
  return (
    <>
     <Navbar />
<BakeryEnrollment />
<CourseFeatures />
<CourseTeaserSection />
     <Footer />

    </>
  );
};

export default BakeryPage;
