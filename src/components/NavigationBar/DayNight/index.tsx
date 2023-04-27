import React from "react";
import style from "./DayNight.module.scss";

export default function DayNight(){
    return(
        <label className={style.switch}>
            <input type="checkbox"/>
            <span className={style.slider}></span>
        </label>
    );
}