import React from "react";
import storyImg from "../assets/images/About-ourstory.png"; // replace with your actual path

const OurStory = () => {
  return (
    <div className="bg-[#FFF7EF] px-4 py-12 font-[Poppins]">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-6 text-black">
        OUR STORY
      </h2>

      <div className="relative max-w-7xl mx-auto rounded-[20px] overflow-hidden shadow-md h-[500px]">
        {/* Background Image */}
        <img
          src={storyImg}
          alt="Our story background"
          className="w-full h-full object-cover"
        />

        {/* Centered Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
          <p className="text-white text-sm md:text-lg font-medium leading-relaxed max-w-4xl">
            Our journey began with a passion for food and the <br></br>desire to share it with others.
           Flavour theory, a <br></br>passionate home cook and food enthusiast, started<br></br> the website
            to create a space where anyone, no<br></br> matter their skill level, could discover new recipes,<br></br>
            learn helpful cooking tips, and explore a world of <br></br>flavors.
            <br /><br />
            Over the years, our team has grown, but our core<br></br> values remain the same:
            to inspire home cooks<br></br> everywhere to embrace the magic of the kitchen and<br></br>
            make every meal a special occasion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
