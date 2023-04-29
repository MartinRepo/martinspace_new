import React, { useState, useContext } from "react";
import style from "./RecommendCard.module.scss";
import TypeWriter from "./TypeWriter/index";
import { ThemeContext, ThemeContextValue  } from "../../App";
interface RecommendCardProps {
    title: string;
}

export default function RecommendCard({title}: RecommendCardProps){
    const [isHover, setIsHover] = useState(false);
    const { theme } = useContext(ThemeContext) as ThemeContextValue;

    return (
        <div className={style.card}>
      <div className={`${style[`cardContainer-theme-${theme}`]}`}>
        <p className={style.name}>{title}</p>
        <div className={`${style.item} ${style[`item-theme-${theme}`]}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}> 
          <span>Recommend1</span>
          <div className={style.summary}>
          <TypeWriter text=" This is a hidden summary. " typingSpeed={300} isHover={isHover}/>
          </div>
        </div>
        <div className={`${style.item} ${style[`item-theme-${theme}`]}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <span>Recommend2</span>
          <div className={style.summary}>
          <TypeWriter text=" This is a hidden summary. " typingSpeed={200} isHover={isHover}/>
          </div>
        </div>
        <div className={`${style.item} ${style[`item-theme-${theme}`]}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <span>Recommend3</span>
          <div className={style.summary}>
          <TypeWriter text=" This is a hidden summary. " typingSpeed={200} isHover={isHover}/>
          </div>
        </div>
      </div>
    </div>
    );
}