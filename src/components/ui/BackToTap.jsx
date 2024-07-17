import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed w-8 h-8 bottom-5 right-5 flex justify-center items-center bg-white border-white rounded-3xl cursor-pointer"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp className="font-bold text-black text-[14px]" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
