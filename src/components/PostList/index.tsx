import React from "react";
import style from "./PostList.module.scss";
import MediaCard from "../PostList/Card";
import { useState } from "react";
import Typography from '@mui/material/Typography';

export function PostList(){
    const [activeButton, setActiveButton] = useState("Java");

    function handleClick(buttonName: string){
        setActiveButton(buttonName);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", justifyContent: "left", marginBottom:"10px"}}>
                <button className={style.button} onClick={() => handleClick("Java")}>Java</button>
                <button className={style.button} onClick={() => handleClick("算法")}>算法</button>
                <button className={style.button} onClick={() => handleClick("机器学习")}>机器学习</button>
                <button className={style.button} onClick={() => handleClick("Web开发")}>Web开发</button>
                <button className={style.button} onClick={() => handleClick("Git")}>Git</button>
            </div>
            {activeButton && <MediaCard title={activeButton}>
<Typography variant="body2" color="text.secondary">
    Java IO is ...
  </Typography>
</MediaCard>}
        </div>
    );
}