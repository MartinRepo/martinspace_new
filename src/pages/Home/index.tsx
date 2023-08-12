import React from "react";
import style from "./Home.module.scss";
import "./Home.module.scss";
import NavigationBar from "../../components/NavigationBar";
import PersonInfoCard from "../../components/PersonInfoCard";
import RecommendCard from "../../components/RecommendCard";
import PinnedCard from "../../components/PinnedCard";
import { PostList } from "../../components/PostList";
import { Grid } from "@mui/material";
import { Container, Box } from "@mui/material";
import BackToTopButton from "../../components/BackToTopButton";

export default function Home(){
    return(
        <Box width="100vw">
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12} xl={12}>
                    <NavigationBar />
                </Grid>
            </Grid>
            <Container maxWidth={false} style={{marginTop: "5em"}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={0} justifyContent="center">
                <Grid item lg={12} >
                    <Grid container spacing={0} justifyContent="center">
                        <Grid item xs={10} sm={6} md={4} lg={5}>
                        <RecommendCard title="Life" />
                        </Grid>
                        <Grid item xs={10} sm={6} md={4} lg={5}>
                        <RecommendCard title="Tech" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Grid container justifyContent="center" style={{marginTop: "1em", marginBottom: "0.5em"}}>
                        <Grid item>
                        <p className={style.newest}>Newest</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <Grid item xs={12} sm={8} md={4} lg={4}>
                        <PinnedCard /> 
                        </Grid>
                        <Grid item xs={12} sm={8} md={4} lg={4}>  
                        <PinnedCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={2}>
                        <PersonInfoCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <p className={style.newest}>Post List</p>
                    </Grid>
                </Grid>
                <Grid container style={{display: "flex", justifyContent: "center", marginTop: "1em", marginBottom: "0.5em"}}>
                    <Grid item xs={10} sm={10}>
                        <PostList />
                    </Grid>
                </Grid>
                <Grid container style={{display: "flex", justifyContent: "center", marginTop: "1em", marginBottom: "0.5em"}}>
                    <Grid item xs={10} sm={10}>
                        <BackToTopButton/>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
}