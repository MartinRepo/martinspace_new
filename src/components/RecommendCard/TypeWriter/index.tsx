import React from "react";
import { useState, useEffect } from "react";

interface TypeWriterProps {
    text: string;
    typingSpeed: number;
    isHover: boolean;
}

const Typewriter = ({ text, typingSpeed, isHover }: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
  
    useEffect(() => {
      if (!isHover) {
        setDisplayedText('');
        return;
      }
  
      let currentText = '';
      let index = 0;
  
      const typingInterval = setInterval(() => {
        currentText += text[index];
        setDisplayedText(currentText);
        index++;
  
        if (index >= text.length) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [text, typingSpeed, isHover]);
  
    useEffect(() => {
      const cursorBlinkInterval = setInterval(() => {
        setCursorVisible((prevCursorVisible) => !prevCursorVisible);
      }, 350);
  
      return () => {
        clearInterval(cursorBlinkInterval);
      };
    }, []);
  
    return (
      <div>
        {displayedText}
        {cursorVisible && '|'}
      </div>
    );
  };

  export default Typewriter;