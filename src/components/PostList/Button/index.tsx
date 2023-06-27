import React from "react"
import style from "./Button.module.scss"
import { useState } from "react"
interface ButtonProps{
    name: string
}
export default function Button({name}: ButtonProps){
    const [btnColor, setBtnColor] = useState("white");
    function handleClick(){
        setBtnColor("black");
    }
    return(
        <button role="button" className={style.buttonName} onClick={handleClick}>{name}</button>
    );
}