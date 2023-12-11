import React from "react";
import { Grid, Box, Divider } from "@mui/material";
import logoIcon from "../assets/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./SocialMediaSignUp.module.css";
import LoginPage from "./LoginPage";
import CustomCarousel from "./CustomCarousel";
import Header from "./Header";
import WhaleInfo from "./WhaleInfo";
import TestimonialCard from "./TestimonialCard";

const SocialMediaSignUp = () => {
  return (
    <Box>
      <Grid className={classes.mainGrid} style={{ height: "100%" }} container>
        <Grid className={classes.gridStyle} item md={6} sm={12}>
          <Grid container spacing={5} className={classes.gridLeft}>
            <Grid className={classes.wrapper} item lg={5} md={12}>
              <Header />
            </Grid>
            <Grid className={classes.wrapper} item lg={7} md={12}>
              <CustomCarousel />
            </Grid>
          </Grid>
          <WhaleInfo />
          <Grid container spacing={5}>
            <Grid  item xs={11}>
          <Box className={classes.testimonialsTitle}>Testimonials</Box>
          <Divider className={classes.divider} />
          <TestimonialCard />
          </Grid>
          </Grid>
          <Box>
            <img className={classes.logo} src={logoIcon} alt="logo" />
          </Box>
        </Grid>
        <LoginPage />
      </Grid>
    </Box>
  );
};

export default SocialMediaSignUp;
