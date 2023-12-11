import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  CardHeader,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import { priceList, daysList } from "../helpers/helper";
import barChart from "../assets/barChart.png";
import notificationBell from "../assets/notification.png";
import clockIcon from "../assets/clock.png";

import classes from "./SocialMediaSignUp.module.css";

const configJSON = require("../helpers/config");

const NotificationCard = () => {
  return (
    <Card className={classes.cardWrapper}>
      <CardHeader
        className={classes.notificationCardHeader}
        avatar={<img src={notificationBell} alt="notification" />}
        action={
          <Button
            className={classes.saveButton}
            variant="text"
            style={{
              color: "var(--grey-900, #19191A)",
              textAlign: "right",
              fontFamily: "Inter",
              fontSize: "9.1px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "120%",
            }}
          >
            Save
          </Button>
        }
      />
      <CardContent className={classes.cardContent}>
        {configJSON.sendNotification}
      </CardContent>
      <CardActions style={{ padding: "0px", marginLeft: "10px" }}>
        <TextField
          className={classes.notificationField}
          inputProps={{
            style: {
              padding: 6,
              fontSize: "8px",
            },
          }}
          defaultValue={"hello@gmail.com"}
        />
      </CardActions>
    </Card>
  );
};

const ChartCard = ({
  icon,
  content,
  valueList,
  selectedValue,
  handleChange,
}) => {
  return (
    <Card className={classes.cardWrapper}>
      <CardHeader
        className={classes.notificationCardHeader}
        avatar={<img src={icon} alt="icon" />}
        action={<input defaultChecked={true} type="checkbox" />}
      />
      <CardContent className={classes.cardContent}>{content}</CardContent>
      <CardActions>
        <FormControl>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedValue}
            onChange={handleChange}
            className={classes.walletOptions}
          >
            {valueList.map((value) => (
              <MenuItem key={value} className={classes.menuItem} value={value}>
                {`$${value.toFixed(2)}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
};

const TimeCard = ({
  icon,
  content,
  valueList,
  selectedValue,
  handleChange,
}) => {
  return (
    <Card className={classes.cardWrapper}>
      <CardHeader
        className={classes.notificationCardHeader}
        avatar={<img src={icon} alt="icon" />}
        action={<input defaultChecked={true} type="checkbox" />}
      />
      <CardContent className={classes.cardContent}>{content}</CardContent>
      <CardActions>
        <Select
          labelId="days-dropdown-label"
          id="days-dropdown"
          value={selectedValue}
          onChange={handleChange}
          className={classes.selectDays}
        >
          {valueList.map((value) => (
            <MenuItem key={value} className={classes.menuItem} value={value}>
              {`>${value}Days`}
            </MenuItem>
          ))}
        </Select>
      </CardActions>
      <Typography className={classes.activeClass}>
        {configJSON.becomesActive}
      </Typography>
    </Card>
  );
};

const CustomCarousel = () => {
  const [selectedPrice, setSelectedPrice] = useState(1000);
  const [selectedDay, setSelectedDay] = useState(30);

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <Box>
      <Carousel
        renderIndicator={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4100}
        showArrows={false}
        className="cardWrapperSlider"
      >
        <NotificationCard />

        <ChartCard
          icon={barChart}
          content={configJSON.notifyMe}
          valueList={priceList}
          selectedValue={selectedPrice}
          handleChange={handlePriceChange}
        />

        <TimeCard
          icon={clockIcon}
          content={configJSON.notifyMeDormant}
          valueList={daysList}
          selectedValue={selectedDay}
          handleChange={handleDayChange}
        />
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
