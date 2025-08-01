import React from "react";
import Navbar from "../components/Navbar";

import SubCourseHero from "../components/SubCourseHero"
import CourseCurriculum from "../components/CourseCurriculum"
import SampleVideoSection from "../components/SampleVideoSection"
import CourseFeatures from "../components/CourseFeatures"
import TestimonialCarousel  from "../components/TestimonialCarousel"
import CourseTeaserSection from "../components/CourseTeaserSection"

import Footer from "../components/Footer"


const CookingCourse = () => {
  return (
    <>
    <Navbar />
    <SubCourseHero />
    <CourseCurriculum />
    <SampleVideoSection />
    <TestimonialCarousel />
    <CourseFeatures />
     <CourseTeaserSection />
    <Footer />
    </>
  );
};

export default CookingCourse;
