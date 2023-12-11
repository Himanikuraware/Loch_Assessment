import React from "react";
import { Grid } from "@mui/material";
import visibilityIcon from "../assets/Vector.png";
import CardIcon from "../assets/image.png";
import classes from "./SocialMediaSignUp.module.css";
const configJSON = require("../helpers/config");

const WhaleInfo = () => {
  return (
    <Grid spacing={2} style={{ marginTop: "26px", justifyContent: 'space-between' }} container>
      <Grid item lg={6}  md={12}>
        <img src={CardIcon} alt="Card Icon" style={{width: '100%'}}/>
      </Grid>
      <Grid item lg={5}  md={12}>
        <div className={classes.watchTheWhalesWrapper}>
            
        <div style={{ textAlign: "right"}}>
          <img src={visibilityIcon} alt="Visibility Icon" />
        </div>
        <h1 className={classes.whalesWatch}>{configJSON.watchTheWhales}</h1>
        <div className={classes.whalesInfo}>{configJSON.allWhales}</div>

        </div>
      </Grid>
    </Grid>
  );
};

export default WhaleInfo;
