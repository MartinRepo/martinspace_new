import React from "react";
import style from "./DayNight.module.scss";
import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "../../../App.jsx";

export default function DayNight(){
    
    const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValue;

    function handleClick(){
        if(theme !== 'dark'){
            alert("Beta测试中，别乱动！")
        }
    }

    return(
        <label className={style.switch}>
            <input type="checkbox" 
            checked={theme === 'dark'}
            onChange={toggleTheme}
            onClick={handleClick} />
            <span className={style.slider}></span>
        </label>
    );
}