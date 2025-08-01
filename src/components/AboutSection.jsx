import React from "react";
import chefImg from "../assets/images/about-banner.png";

const AboutSection = () => {
  return (
    <div className="bg-[#FFFAF2] px-4 py-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Left Box */}
        <div className="w-full md:w-[54%] flex">
          <div className="bg-gradient-to-b from-[#A7C957] to-white rounded-[24px] shadow-md p-6 md:p-10 text-center w-full h-full flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-black">
              MORE POWER TO YOUR COOKING! <br /> THROUGH LEARNING
            </h2>
            <p className="text-sm md:text-base text-black mb-6 font-medium">
              Discover A Better Way Of Cooking Amazing Dishes With Recipes
              Specially Curated By The Most Celebrated Face In The Indian
              Cuisine.
            </p>
        
        <button className="bg-[#D57A66] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#c26150] text-sm md:text-base w-fit mx-auto">
         VIEW COURSES
        </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[46%]">
          <img
            src={chefImg}
            alt="Chef cooking"
            className="w-full h-full rounded-[24px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
