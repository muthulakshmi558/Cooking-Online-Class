import React, { useState } from "react";
import { MessageSquareMore, X, Smile, Paperclip } from "lucide-react";

const CourseTeaserSection = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="bg-[#FFFAF2] py-20 px-4 font-[Poppins] relative">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-10">
        <p className="text-3xl md:text-3xl lg:text-3xl font-bold text-black max-w-4xl leading-relaxed md:leading-loose">
          Homemakers to busy executives, budding chefs to food entrepreneurs,
          grandparents to moms, health conscious people or foodies – there’s a course for all.
        </p>

        <button className="bg-[#D57A66] hover:bg-[#c26150] text-white px-7 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition duration-300">
          VIEW COURSES
        </button>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          {showChat ? (
            <X size={28} className="text-[#D57A66]" />
          ) : (
            <MessageSquareMore size={28} className="text-[#A7C957]" />
          )}
        </button>
      </div>

      {showChat && (
        <div className="fixed bottom-24 right-6 w-[320px] bg-gradient-to-b from-[#FFF1E9] to-[#FFE8DA] border border-gray-200 rounded-xl shadow-2xl z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#f2d6c8]">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#f2f2f2] rounded-full flex items-center justify-center text-sm font-bold text-[#D57A66]">
                S
              </div>
              <span className="text-sm font-semibold text-gray-800">Inbox</span>
            </div>
            <button onClick={() => setShowChat(false)}>
              <X size={18} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {/* Message Body */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-white text-sm text-gray-700 px-4 py-2 rounded-xl shadow w-fit max-w-[85%]">
              Hello there! Thank you for reaching out to us.
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#f2d6c8] flex items-center space-x-3 bg-white">
            <input
              type="text"
              placeholder="REPLY HERE"
              className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D57A66]"
            />
            <Smile size={20} className="text-gray-400 cursor-pointer" />
            <Paperclip size={20} className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseTeaserSection;
