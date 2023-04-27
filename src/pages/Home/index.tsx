import React from "react";
import style from "./Home.module.scss";
import NavigationBar from "../../components/NavigationBar";
import PersonInfoCard from "../../components/PersonInfoCard";
import RecommendCard from "../../components/RecommendCard";
import PinnedCard from "../../components/PinnedCard";
import { Grid } from "@mui/material";
import { Container, Box } from "@mui/material";

export default function Home(){
    return(
        <Box width="100vw">
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12} xl={12}>
                    <NavigationBar />
                </Grid>
            </Grid>
            <Container maxWidth={false} style={{marginTop: "1em"}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={0} justifyContent="space-evenly">
                <Grid item lg={12} >
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                        <RecommendCard title="Life" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                        <RecommendCard title="Tech" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={2}>
                        <PersonInfoCard />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Grid container spacing={6} justifyContent="center" style={{marginTop: "1em"}}>
                        <Grid item xs={12} sm={6} md={4} lg={5}>
                        <PinnedCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={5}>  
                        <PinnedCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
}