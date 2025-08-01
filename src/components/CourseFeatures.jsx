import React from "react";
import {
  List,
  Target,
  Utensils,
  FileText,
  Monitor,
  BadgeCheck,
  PencilLine,
} from "lucide-react";

const CourseFeatures = () => {
  const features = [
    {
      icon: <PencilLine size={32} />,
      text: "1 year access to exclusive recipe videos, not available on YouTube",
    },
    {
      icon: <Target size={32} />,
      text: "More than 140 downloadable signature recipes from the Masterchef",
    },
    {
      icon: <Utensils size={32} />,
      text: "Learn how to cook dishes from basic to advanced recipes",
    },
    {
      icon: <FileText size={32} />,
      text: "Watch videos unlimited times and download recipe PDFs",
    },
    {
      icon: <Monitor size={32} />,
      text: "Learn from anywhere with any device – mobile, desktop, or laptop",
    },
    {
      icon: <BadgeCheck size={32} />,
      text: "Course completion certificate",
    },
  ];

  return (
    <div className="bg-[#A7C957] py-20 px-6 rounded-3xl font-[Poppins] text-white max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 px-2"
          >
            <div className="text-white">{feature.icon}</div>
            <p className="font-semibold text-lg leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;
