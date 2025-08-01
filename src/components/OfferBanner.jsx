import React from "react";
import bgImage from "../assets/images/offerbanner.png"; // Adjust if needed

const OfferBanner = () => {
  return (
    <div className="bg-[#FFFAF2] py-8 px-2 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-[20px] overflow-hidden h-[420px] md:h-[480px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Text Content with background for contrast */}
          <div className=" text-white   pl-6 pr-8 py-8 md:pl-12 md:pr-16 md:py-10 rounded-r-[20px] w-full md:w-3/4 max-w-[800px]">
            <h3 className="text-xl md:text-3xl uppercase tracking-widest mb-2">
              Limited Period Offer:
            </h3>
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              FREE GIFT WITH EVERY COURSE
            </h2>
            <div className="h-[2px] bg-white w-32 mb-4" />
            <p className="text-xl md:text-2xl uppercase font-light leading-relaxed mb-6">
              Get access to bonus course with <br></br>premium recipes and cook amazing<br></br> dishes with{" "}
              <strong>US CRANBERRIES.</strong>
            </p>
            <button className="bg-[#D57A66] hover:bg-[#c26150] text-white px-5 py-2 rounded-full text-sm font-semibold">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
