import React from "react";
import bgImage from "../assets/images/bakery-banner.png";     // background image with ingredients
import chefImage from "../assets/images/bakery.png";     // circular chef image
import { FaUserFriends, FaBookOpen, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const CloudEnrollment = () => {
  return (
    <div className="px-4 py-10 bg-[#FFF7F3] ">
      {/* Section Title */}

            
      {/* Main Box with background image */}
<div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden ">
  {/* Background Image */}
  <img
    src={bgImage}
    alt="Bakery Background"
    className="w-full h-[800px] object-cover rounded-3xl"
  />


  {/* Overlay Content */}
  <div className="absolute inset-0  flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 rounded-3xl">
    
    {/* LEFT - Centered Text */}
    <div className="md:w-1/2 flex flex-col justify-center items-start text-white h-full space-y-4">
<h2 className="text-2xl md:text-xl font-bold text-center ">
        Launch & Grow Your CLOUD KITCHEN in the next 60 Days with <br></br>
        the Bakery Accelerator Program </h2>
        
      <p className="text-lg font-medium">
        Even If You Don’t Have Any Prior Experience In Baking!
      </p>
      <ul className="space-y-2 text-base">
        <li>📅 <strong>Batch II Start Date:</strong> 31st July 2024</li>
        <li>🎥 <strong>10+ Hrs</strong> Of Pre-Recorded Video Content</li>
        <li>🍰 <strong>100+ Baking Recipes</strong></li>
        <li>🎓 <strong>Exclusive Masterclasses</strong></li>
      </ul>
      <p className="text-xl font-semibold mt-2">
        Program Fees: <span className="text-[#D57A66]">₹ 80,000</span> | <span className="text-[#A7C957]">INR 28,000/-</span>
      </p>
      <Link to="/entrollform">
      <button className="bg-[#D57A66] text-white px-6 py-3 rounded-full mt-4 hover:bg-[#c66b55]">
        ENROLL NOW
      </button>
      </Link>
   <p className="text-sm mt-2 text-red-300 font-semibold bg-white px-2 py-1 inline-block rounded">
  We’re looking for Action Takers. Program open for 50 participants only
</p>
    </div>

    {/* RIGHT - Chef Image */}
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#A7C957] shadow-xl">
        <img src={chefImage} alt="Chef" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default CloudEnrollment;
