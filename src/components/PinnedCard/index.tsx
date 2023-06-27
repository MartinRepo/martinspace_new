import React, {useContext} from "react";
import style from "./PinnedCard.module.scss";
import { ThemeContext, ThemeContextValue } from "../../App";

export default function PinnedCard(){
    const {theme} = useContext(ThemeContext) as ThemeContextValue;
    return(
        <div className={`${style.container} ${style[`container-theme-${theme}`]}`}>
            <img/>
            <div>
                这里是summary
            </div>
        </div>
    );
}