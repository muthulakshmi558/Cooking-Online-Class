import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="bg-[#FFFAF2] px-4 py-12 font-[Poppins]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-black">
          WHAT WE OFFERS
        </h2>
        <ul className="space-y-6 text-left text-base md:text-lg font-medium">
          <li className="flex items-start gap-2">
            <span className="text-[#D57A66] text-xl leading-none">•</span>
            <span>
              <span className="font-bold text-[#D57A66]">Tasty Recipes:</span>{" "}
              From quick weeknight dinners to indulgent desserts, our recipes cover every occasion and dietary preference. Each recipe is tested and designed to be easy to follow, so you can enjoy the process as much as the result!
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#D57A66] text-xl leading-none">•</span>
            <span>
              <span className="font-bold text-[#D57A66]">Helpful Cooking Tips:</span>{" "}
              Our step-by-step guides, cooking hacks, and ingredient substitutions will help you master new techniques and cook with confidence.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#D57A66] text-xl leading-none">•</span>
            <span>
              <span className="font-bold text-[#D57A66]">Community of Food Lovers:</span>{" "}
              Join our vibrant community of home cooks, share your own recipes, leave reviews, and inspire others. We believe cooking is even more enjoyable when shared!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeOffer;
