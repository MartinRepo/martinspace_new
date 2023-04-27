import React from 'react';
import style from './PersonInfoCard.module.scss';
import avatar from '../../assets/avatar.jpg';
import { Avatar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function PersonInfoCard(){
    return(
        <div className={style.container}>
            <div className={style.cardInfo}>
                <div className={style.avatar}>
                    <Avatar src={avatar} sx={{ width: 64, height: 64 }}/>
                </div>
                <div className={style.infor}>
                    <p>Martin</p>
                    Student &amp; Developer
                </div>
            
            <div className={style.icon}>
                <a href="https://github.com/MartinRepo" className={style.github} target="_blank">
                <GitHubIcon fontSize="large"/>
                </a>
                <a href="https://www.instagram.com/martinxing7788/" className={style.ins} target="_blank">
                <InstagramIcon fontSize="large"/>
                </a>
                <a href="mailto:martinchi7788@gmail.com" className={style.mail} target="_blank">
                <MailOutlineIcon fontSize="large"/>
                </a>
            </div>
            </div>
        </div>
    );
}