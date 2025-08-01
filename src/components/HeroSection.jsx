import React from "react";
import ChefImage from "../assets/images/chef-image.png"; 

const HeroSection = () => {
  return (
    <div className="bg-[#FFFAF2] py-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
        <div className="w-full md:w-[45%]">
          <img
            src={ChefImage}
            alt="Chef Cooking"
            className="rounded-[20px] w-full h-[300px] object-cover shadow-md"
          />
        </div>

        <div className="w-full md:w-[55%] relative">
          <div className="absolute top-0 left-0 h-full w-[25px] bg-[#A7C957] rotate-[2deg] rounded-l-[20px] z-0 origin-left"></div>
          <div className="absolute top-0 right-0 h-full w-[25px] bg-[#A7C957] -rotate-[2deg] rounded-r-[20px] z-0 origin-right"></div>

          <div className="relative bg-white rounded-[20px] shadow-md p-6 md:p-8 z-10 min-h-[300px] flex flex-col justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              TAKE YOUR COOKING SKILLS TO <br />
              THE NEXT LEVEL WITH MASTER CHEFS
            </h2>
            <p className="text-sm md:text-base text-gray-800 mb-6">
              Culinary tips and tricks straight from the expert, on how to cook
              scrumptious, Instagram-ready, lip-smacking dishes that are clean,
              healthy, and energizing.
            </p>
            <Link to="./courses">
            <button className="bg-[#D57A66] text-white font-semibold px-5 py-1.5 text-sm rounded-full hover:bg-[#c26150] transition duration-300">
              VIEW COURSES
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
