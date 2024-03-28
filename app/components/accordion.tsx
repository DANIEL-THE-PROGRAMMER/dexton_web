"use client";

import { useState } from "react";

export const Accordion = ({
  faq,
}: {
  faq: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md  font-inter rounded-[12px]">
      <div
        className={`flex justify-center items-center gap-200px p-[24px] cursor-pointer h-70px rounded-12 transition-all duration-300 ${
          isOpen ? "h-auto" : ""
        }`}
        style={{
          color: isOpen ? "#06F" : "#141A21",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "22px",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        <button className="ml-auto text-gray-500 transition-transform transform focus:outline-none mt-[-6px]">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px] rotate-180"
              fill="none"
              viewBox="0 0 18 18"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-[18px] rotate-90"
              fill="none"
              viewBox="0 0 18 18"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="pb-[24px] px-[24px] text- text-black">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
