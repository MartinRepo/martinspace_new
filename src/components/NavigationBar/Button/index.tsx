import React from "react";
import style from "./Button.module.scss";
import { useContext } from "react";
import { ThemeContext, ThemeContextValue  } from "../../../App";


interface ButtonProps {
    name: string;
    url: string;
}

export default function Button({name, url}: ButtonProps){
    const { theme } = useContext(ThemeContext) as ThemeContextValue;
    return (
        <li className={`${style.list} ${style[`theme-${theme}`]}`}>
            <a className={`${style.link} ${style[`theme1-${theme}`]}`} href={url}>{name}</a>
        </li>
    );
}