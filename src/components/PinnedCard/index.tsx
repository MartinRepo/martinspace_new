import React, {useContext} from "react";
import style from "./PinnedCard.module.scss";
import { ThemeContext, ThemeContextValue } from "../../App";

export default function PinnedCard(){
    const {theme} = useContext(ThemeContext) as ThemeContextValue;
    return(
        <div className={`${style.container} ${style[`container-theme-${theme}`]}`}>
            <img/>
            <div className={`${style.cardHeader}`}>
            卡片标题
            </div>
            <div className={`${style.cardBody}`}>
            卡片正文
            </div>
            <div className={`${style.cardFooter}`}>
                <a href="#" style={{textDecoration:"none"}}>#标签</a>
            </div>
        </div>
    );
}