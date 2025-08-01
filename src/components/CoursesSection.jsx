import React from "react";
import bgImage from "../assets/images/course-online.png";

const courses = [
  {
    title: "THE GOOD GUT PROGRAM",
    description:
      "In Just 4 Weeks, Say Goodbye To Bloating, Constipation, Inflammation & Acidity. Plus Gain More Energy & Boost Immunity",
    offer: "Get 70% OFF",
    price: "₹ 4999 ₹ 1499",
  },
  {
    title: "LOOK GOOD COURSE",
    description:
      "In Just 30 Days, Discover Time Tested & Science Backed Insights, Remedies And Recipes",
    offer: "New Launch Offer | Get 88% OFF",
    price: "₹ 42,995 ₹ 4,999",
  },
  {
    title: "Start Your Food Business From Home",
    description:
      "Learn How To Start Your Food Business From Home, And Run A Successful Home",
    offer: "New Launch Offer | Get 70% OFF",
    price: "₹ 4999 ₹ 1,499",
  },
];

const CoursesSection = () => {
  return (
    <div className="bg-[#FFFAF2] py-12 font-[Poppins] px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        FEATURED COURSES
      </h2>

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative rounded-[20px] overflow-hidden h-[560px]"
          >
            {/* Full-size image */}
            <img
              src={bgImage}
              alt="Course"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay content */}
              <div className="absolute inset-0  flex flex-col justify-center text-[#FFFAF2] px-6 py-8 text-center">
              <div className="mb-8">
               <h3 className="text-lg font-semibold mb-3  justify-start text-[#FFFAF2]">
                {course.title}
               </h3>
                <p className="text-md leading-snug mb-4">{course.description}</p>
                <p className="font-medium">{course.offer}</p>
<p className="font-bold">
  <span className="line-through mr-2 text-red-200">
    ₹ {course.price.split("₹ ").filter(Boolean)[0]}
  </span>
  <span>₹ {course.price.split("₹ ").filter(Boolean)[1]}</span>
</p>                </div>

              {/* Button slightly above bottom */}
              <button className="bg-[#D57A66] text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-[#c26150] transition duration-300 w-fit mx-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
