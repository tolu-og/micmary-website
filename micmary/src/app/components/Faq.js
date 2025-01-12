"use client"
import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "We welcome children as young as 6 months all the way up to 6 years."
    },
    {
      question: "What are your operating hours?",
      answer: "We're open from sunrise to sundown - Quite literally! You can drop your child off as early as 7:00 AM and pick them up as late as 6:00 PM."
    },
    {
      question: "What extra-curricular activities do you offer?",
      answer: "From chess to charades, karate to kazoo lessons, we offer a wide range of clubs and extracurricular activities to keep your child engaged and entertained."
    },
    {
      question: "How can I enroll my child?",
      answer: "Just hit the 'Admissions' button and follow the steps. Easy Peasy Lemon Squeezy!"
    }
  ];

  return (
    <div className="bg-[#4a5a3c] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                className="text-2xl font-semibold mb-4 w-full text-left focus:outline-none flex justify-between items-center group"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="opacity-70 group-hover:opacity-100"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <p className="text-lg pb-4 animate-fadeIn">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
