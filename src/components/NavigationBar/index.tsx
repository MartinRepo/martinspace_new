import React from "react";
import style from './NavigationBar.module.scss'
import Button from "./Button/index";
import DayNight from "./DayNight";

export default function NavigationBar(){
    return(
        <div className={style.container}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p className={style.title}> <a href="/">Martin's space</a> </p>
            <ul style={{display:"flex", flexDirection:"row", listStyle:"none", listStyleType:"none", padding:"0"}}>
                <Button name="Home" url="/"/>
                <Button name="Post" url="/post"/>
                <Button name="Archives" url="/archives"/>
                <Button name="About" url="/about"/>
                <Button name="Photo" url="/photo"/>
            </ul> 
            </div>
            <div style={{marginTop: "1.2em", marginRight:"2em"}}>
                <DayNight />
            </div>
        </div>
    );
}