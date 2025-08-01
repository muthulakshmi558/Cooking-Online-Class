import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jason M.",
    quote:
      "I finally learned how to cook without Googling every step!",
    image: "./src/assets/images/person1.png", // replace with your path
  },
  {
    name: "Emily R.",
    quote:
      "This course made cooking fun and stress-free. Loved it!",
    image: "./src/assets/images/person2.png",
  },
  {
    name: "Amit K.",
    quote:
      "I used to hate cooking. Now I look forward to making dinner.",
    image: "./src/assets/images/person3.png",
  },

    {
    name: "Amit K.",
    quote:
      "I used to hate cooking. Now I look forward to making dinner.",
    image: "./src/assets/images/person4.png",
  },

      {
    name: "Amit K.",
    quote:
      "I used to hate cooking. Now I look forward to making dinner.",
    image: "./src/assets/images/person4.png",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { name, quote, image } = testimonials[index];

  return (
    <div className="bg-[#FFF7F0] px-4 py-16 flex justify-center font-[Poppins]">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Course Testimonials
        </h2>

        <div className="relative bg-[#FFF0D8] rounded-2xl px-6 pt-24 pb-16 min-h-[280px] md:min-h-[320px] shadow-md">
          {/* Profile Image */}
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Quote */}
          <p className="text-lg md:text-xl font-semibold mb-6">
            “{quote}”
          </p>

          {/* Name */}
          <p className="text-base font-bold">– {name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
