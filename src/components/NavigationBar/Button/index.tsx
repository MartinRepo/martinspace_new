import React from "react";
import style from "./Button.module.scss";
interface ButtonProps {
    name: string;
    url: string;
}

export default function Button({name, url}: ButtonProps){
    return (
        <li className={style.list}>
            <a className={style.link} href={url}>{name}</a>
        </li>
    );
}