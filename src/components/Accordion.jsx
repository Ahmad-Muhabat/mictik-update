import React, { useState } from "react";

export default function Accordion({ less, more }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: less,
      answer: more,
    },
  ];

  return (
    <div className="grid gap-6 px-24 sm:grid-cols-1"> 
      {faqs.map((faq, index) => (
        <div
          className="transition-all border-t-2 border-gray-400"
          role="accordion"
          key={index}
        >
          <div
            onClick={() => toggleAccordion(index)}
            className={`flex items-center w-full p-6 text-sm font-semibold text-left cursor-pointer transition-all ${
              activeIndex === index ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <span className="mr-4 text-lg">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[14px] fill-current ml-auto shrink-0 transform transition-transform ${
                activeIndex === index ? "rotate-90 text-gray-500" : ""
              }`}
              viewBox="0 0 124 124"
            >
              <path
                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                data-original="#000000"
              />
            </svg>
          </div>
          {activeIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-lg leading-relaxed text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    
    </div>
  );
}
