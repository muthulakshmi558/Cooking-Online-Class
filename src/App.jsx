import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Programs from "./pages/Programs";
import Courses from "./pages/Courses"
import CookingCourse from "./pages/CookingCourseSG"
import CloudKitchen from "./pages/CloudKitchen"
import BakeryPage from "./pages/BakeryBusiness"
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginForm"
import EnrollmentForm from "./components/EnrollmentForm"
import EntrollmentPage from "./pages/EntrollmentPage"

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/programs" element={<Programs />} /> */}
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path ="/subcourse" element ={< CookingCourse/>} />
        <Route path ="/entrollment" element ={< EnrollmentForm/>} />
        <Route path ="/bakery" element ={< BakeryPage/>} />
        <Route path ="/contact" element ={< Contact/>} />
       <Route path ="/login" element ={< LoginPage/>} />
        <Route path ="/cloud" element ={< CloudKitchen/>} />
        <Route path ="/entrollform" element ={< EntrollmentPage/>} />






        




      </Routes>
    </Router>
  );
}

export default App;
