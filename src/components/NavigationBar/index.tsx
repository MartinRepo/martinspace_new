import React from "react";
import style from './NavigationBar.module.scss'
import Button from "./Button/index";
import DayNight from "./DayNight";
import Grid from '@mui/material/Grid';
import { useContext } from "react";
import { ThemeContext, ThemeContextValue  } from "../../App";

export default function NavigationBar(){
    const { theme } = useContext(ThemeContext) as ThemeContextValue;

    return(
        <div className={`${style.container} ${style[`theme-${theme}`]}`}> 
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1}} style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                <Grid item xs={3} lg={2}>
                    <p className={style.title}> <a href="/">Martin's space</a> </p>
                </Grid>
                <Grid item xs={7} lg={8}>
                    <ul style={{display:"flex", flexDirection:"row", listStyle:"none", listStyleType:"none", padding:"0"}}>
                        <Button name="Home" url="/"/>
                        <Button name="Post" url="/post"/>
                        <Button name="Archives" url="/archives"/>
                        <Button name="About" url="/about"/>
                        <Button name="Photo" url="/photo"/>
                    </ul> 
                </Grid>
                <Grid item xs={1} lg={2}>
                    <DayNight />
                </Grid>
            </Grid>
        </div>
    );
}