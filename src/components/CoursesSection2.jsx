import React from "react";
import bgImage from "../assets/images/courses.png";
// If using React Router, uncomment this:
// import { Link } from "react-router-dom";

const courses = [
  {
    title: "IMMUNITY BOOSTER RECIPES",
    description:
      "Live Well And Boost Your Immunity With Time-Tested Immunity Booster Recipes From The Expert In Indian Cuisine",
    offer: "Limited Period Offer – Get 40% OFF",
    price: "₹ 4000 ₹ 1,999",
  },
  {
    title: "GARNISHING & PLATING COURSE",
    description:
      "Love Plating Your Dishes Like An Expert? Take Professional Cues From MasterChef Sanjeev Kapoor To Excel In The Art Of Food Presentation!",
    offer: "Limited Period Offer – Get 60% OFF",
    price: "₹ 999 ₹ 399",
  },
  {
    title: "COOKING AT HOME – RESTAURANT STYLE",
    description:
      "Cook Amazing Restaurant Style Dishes And Change Everyday Home Cooked Dishes Into Exceptional Dishes Your Family Will Love",
    offer: "Get 90% OFF",
    price: "₹ 6000 ₹ 1,999",
  },
  {
    title: "VEGETARIAN,S DELIGHT",
    description:
      "Live Well And Boost Your Immunity With Time-Tested Immunity Booster Recipes From The Expert In Indian Cuisine",
    offer: "Limited Period Offer – Get 40% OFF",
    price: "₹ 4000 ₹ 1,999",
  },
  {
    title: "GARNISHING & PLATING COURSE",
    description:
      "Love Plating Your Dishes Like An Expert? Take Professional Cues From MasterChef Sanjeev Kapoor To Excel In The Art Of Food Presentation!",
    offer: "Limited Period Offer – Get 60% OFF",
    price: "₹ 999 ₹ 399",
  },
  {
    title: "COOKING AT HOME – RESTAURANT STYLE",
    description:
      "Cook Amazing Restaurant Style Dishes And Change Everyday Home Cooked Dishes Into Exceptional Dishes Your Family Will Love",
    offer: "Get 90% OFF",
    price: "₹ 6000 ₹ 1,999",
  },
];

const CoursesSection2 = () => {
  return (
    <div className="bg-[#FFFAF2] py-12 px-4 font-[Poppins]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        ALL COURSES
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative h-[600px] rounded-[20px] overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={bgImage}
              alt="Course"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40 text-white p-8 text-center flex flex-col justify-between h-full">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#FFFAF2] mb-4">
                {course.title}
              </h3>

              {/* Description */}
              <div className="text-black rounded-md p-4 max-w-[250px] text-sm md:text-base leading-snug mx-auto ">
                <p className="mb-2">{course.description}</p>
                <p className="font-semibold">{course.offer}</p>
<p className="font-bold">
  <span className="line-through mr-2 text-red-200">
    ₹ {course.price.split("₹ ").filter(Boolean)[0]}
  </span>
  <span>₹ {course.price.split("₹ ").filter(Boolean)[1]}</span>
</p>              </div>

              {/* Button */}
              {index === 5 ? (
                <a
                  href="/subcourse"
                  className="bg-[#D57A66] hover:bg-[#c26150] text-white px-10 py-3 rounded-full text-sm font-semibold transition mt-6 mx-auto block text-center"
                >
                  LEARN MORE
                </a>
              ) : (
                <button
                  className="bg-[#D57A66] text-white px-10 py-3 rounded-full text-sm font-semibold transition mt-6 mx-auto cursor-default"
                  disabled
                >
                  LEARN MORE
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection2;
