import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I find a recipe on your website?",
    answer:
      "Use the search bar or browse categories to quickly find recipes based on ingredients, meal type, or preferences.",
  },
  {
    question: "Can I save my favorite recipes?",
    answer:
      "Yes! You can create an account and bookmark your favorite recipes for quick access anytime.",
  },
  {
    question: "How do I submit my own recipes?",
    answer:
      "Use the 'Submit Recipe' option from your profile. Fill in the details and submit—it'll be reviewed before going live.",
  },
  {
    question: "Are the recipes suitable for beginners?",
    answer:
      "Absolutely! We have a wide variety of beginner-friendly recipes with easy-to-follow steps and tips.",
  },
  {
    question:
      "How do I know if a recipe is vegan, gluten-free, or dairy-free?",
    answer:
      "Each recipe includes dietary tags like vegan, gluten-free, and dairy-free so you can filter based on your needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFFAF2] py-12 px-4 font-[Poppins]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">FAQ’S</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#d9cfc7] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-[#5C4538] text-lg font-medium"
              >
                {index + 1}. {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-[#5C4538] text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
