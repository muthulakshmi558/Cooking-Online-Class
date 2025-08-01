import React from "react";
import curriculumImg from "../assets/images/sub-course2.png"; // Your image path

const CourseCurriculum = () => {
  return (
    <div className="w-full bg-[#FFF7F0] px-4 py-10 font-[Poppins] flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
          Course Curriculum
        </h2>

        {/* Image Background Box with content on top */}
        <div
          className="relative rounded-[20px] overflow-hidden  bg-center w-full"
          style={{
            backgroundImage: `url(${curriculumImg})`,
          }}
        >
          <div className="w-full h-full text-4xl  p-6 md:p-10 flex items-center justify-end">
            <ul className="list-disc text-2xl font-semibold text-[#333] text-base leading-relaxed space-y-2 max-w-xl text-left">
              <li>Introduction: Restaurant style dishes</li>
              <li>Master class with master chef</li>
              <li>Restaurant style dishes: Accompaniments</li>
              <li>Breads</li>
              <li>Desserts</li>
              <li>Main course – non veg</li>
              <li>Main course – veg</li>
              <li>Rice</li>
              <li>Soup – veg</li>
              <li>Starters – non veg</li>
              <li>Soup – non veg</li>
              <li>Starters – veg</li>
              <li>Bonus course: All about US Assessments</li>
              <li>Thank You</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
