import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      setIsVisible(top > 50);
    });
  }, []);

  return (
    <button
      className={isVisible ? "back-to-top" : "back-to-top hidden"}
      onClick={() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
      }}
    >
      Back to top
    </button>
  );
};

export default BackToTopButton;