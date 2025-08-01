import React from "react";
import videoImg from "../assets/images/sample.png"; // replace with your actual path
import { Play } from "lucide-react"; // Optional: if you're using lucide-react icons

const RecipeSection = () => {
  return (
    <div className="bg-[#FFF7F0] px-4 py-10 font-[Poppins] flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          OUR CLASS SAMPLE VIDEO
        </h2>

        <div className="relative w-full rounded-2xl overflow-hidden mb-10">
          <img
            src={videoImg}
            alt="Veg Hakka Noodles"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
              <Play size={32} className="text-black" />
            </div>
          </div>
        </div>

        <div className="text-[#222] text-base md:text-lg leading-relaxed space-y-6">
          <div>
            <h2 className="font-bold text-3xl mb-2">Veg Hakka Noodles (Indian–Chinese)</h2>
            <h3 className="font-semibold text-xl mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>200g Hakka Noodles</li>
              <li>2 Tbsp Oil</li>
              <li>1 Tbsp Soy Sauce</li>
              <li>1 Tsp Vinegar</li>
              <li>½ Tsp Chili Sauce</li>
              <li>1 Tsp Garlic (Finely Chopped)</li>
              <li>1 Onion (Sliced)</li>
              <li>
                1 Cup Julienned Veggies (Carrot, Bell Pepper, Cabbage, Beans)
              </li>
              <li>Salt & Pepper</li>
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-1 font-medium">
              <li>Boil noodles, rinse with cold water, toss in a bit of oil.</li>
              <li>Heat oil in a wok, sauté garlic and onions.</li>
              <li>
                Add all veggies and stir-fry on high heat for 2–3 mins.
              </li>
              <li>
                Add noodles, soy sauce, vinegar, chili sauce, salt & pepper.
              </li>
              <li>
                Toss on high flame until well combined. Serve hot.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
