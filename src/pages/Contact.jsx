import React from "react";
import Navbar from "../components/Navbar";

import ContactForm from "../components/ContactForm"
import CourseTeaserSection from "../components/CourseTeaserSection"
import Footer from "../components/Footer"


const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactForm />
     <CourseTeaserSection />
     <Footer />

    </>
  );
};

export default Contact;
