import React from "react";

const AboutTextSection = () => {
  return (
    <div className="bg-[#FFFAF2] px-4 py-12 font-[Poppins] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
          ABOUT US
        </h2>
        <p className="text-base md:text-lg font-semibold text-black leading-relaxed mb-4">
          Welcome to <span className="font-bold">Flavour theory</span>, your go-to place for delicious recipes,
          culinary inspiration, and a community of food lovers!
        </p>
        <p className="text-base md:text-lg font-semibold text-black leading-relaxed">
          At <span className="font-bold">Flavour theory</span>, we believe that cooking is more than just preparing food—
          it’s about <span className="font-bold">creativity, joy, and bringing people together</span>. Whether you're a seasoned
          chef or just starting your culinary journey, our mission is to make cooking <span className="font-bold">easy, fun, and accessible</span> to everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutTextSection;
