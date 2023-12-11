import React from "react";
import { Box, Typography } from "@mui/material";

import notificationIcon from "../assets/Bell.png";
import classes from "./SocialMediaSignUp.module.css";

const configJSON = require("../helpers/config");

const Header = () => {
  return (
    <Box className={classes.notificationWrapper}>
      <Box>
        <div>
          <img src={notificationIcon} alt="notification" />
        </div>
        <h2 className={classes.notificationHeading}>
          {configJSON.notificationHeading}
        </h2>
        <Box>
          <Typography className={classes.whaleHeading}>
            {configJSON.whaleHeading}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
