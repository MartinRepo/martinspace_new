import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Archives from "../pages/Archives";
import Post from "../pages/Post";
import Photo from "../pages/Photo";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/archives" element={<Archives />}/>
        <Route path="/photo" element={<Photo />}/>
    </Routes>
);

export default AppRoutes;