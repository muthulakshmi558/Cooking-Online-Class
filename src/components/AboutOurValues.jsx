import React from "react";
import bgImage from "../assets/images/About-ourvalues.png"; // update with your image

const AboutOurValues = () => {
  return (
    <div className="bg-[#FFFAF2] px-4 py-12 font-[Poppins]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-black">
          OUR VALUES
        </h2>

        <div className="relative rounded-[20px] overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src={bgImage}
            alt="Values"
            className="w-full h-[400px] object-cover"
          />

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <ul className="text-white text-left text-base md:text-lg font-medium space-y-4 max-w-3xl">
              <li>
                <span className="text-xl leading-none mr-2">•</span>
                <span className="font-semibold">Simplicity:</span> We keep our recipes simple and approachable,<br></br> so even beginners can enjoy cooking.
              </li>
              <li>
                <span className="text-xl leading-none mr-2">•</span>
                <span className="font-semibold">Creativity:</span> We encourage experimenting in the kitchen, mixing <br></br>ingredients, and discovering new flavors.
              </li>
              <li>
                <span className="text-xl leading-none mr-2">•</span>
                <span className="font-semibold">Passion:</span> Our love for food drives everything we do — and we<br></br> share it with every recipe.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurValues;
