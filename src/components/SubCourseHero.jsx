import React from "react";
import bgImage from "../assets/images/sub-course1.png"; // update with your image
import { useNavigate } from "react-router-dom";


const SubCourseCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-10 font-[Poppins] bg-[#FFFAF2] flex justify-center">
      <div className="relative w-full max-w-5xl rounded-[30px] overflow-hidden shadow-lg bg-white">
        <img
          src={bgImage}
          alt="Online Course"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0  bg-opacity-20"></div>

        <div className="absolute inset-0 px-6 md:px-12 py-10 flex flex-col justify-center items-center text-center text-black">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            From Butter Chicken to Singaporean Noodles: Cook
          </h2>
          <h1 className="text-xl md:text-2xl font-extrabold mb-4">
            India’s Favourite Dishes at Home
          </h1>
          <p className="text-sm md:text-base mb-4 max-w-2xl">
            In just 90 days, master the art of cooking 140+ basic to advanced
            Restaurant and Home styled dishes with step by step guidance and recipes!
          </p>

          <p className="text-lg font-bold mb-1">
            Limited Period Offer – Get 67% OFF
          </p>
          <p className="line-through font-semibold">₹ 6000</p>
          <p className="text-2xl font-extrabold text-[#D57A66] mb-4">₹ 1,999</p>

        <button onClick={() => navigate("/entrollform")}
        className="bg-[#D57A66] hover:bg-[#c65c4d] text-white px-6 py-2 rounded-full font-semibold transition">
        ENROLL NOW
        </button>

          <p className="mt-6 text-sm md:text-base max-w-xl">
            Learn the secrets of cooking delicious restaurant and home-style dishes with
            the Masterchef & ace the art of recreating amazing cuisines at home.
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-[#D57A66] text-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow">
            <img src="/icons/followers.svg" alt="Followers" className="w-5 h-5" />
            <span>20M Followers</span>
          </div>

          <div className="bg-[#D57A66] text-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow">
            <img src="/icons/books.svg" alt="Books" className="w-5 h-5" />
            <span>Author 50+ books</span>
          </div>

          <div className="bg-[#D57A66] text-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow">
            <img src="/icons/chef.svg" alt="Expertise" className="w-5 h-5" />
            <span>30 Yrs+ culinary Expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCourseCard;
