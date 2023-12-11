import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, CardContent, Typography, Card } from "@mui/material";
import Draggable from "react-draggable";

import { testimonials } from "../helpers/helper";
import classes from "./SocialMediaSignUp.module.css";

const TestimonialCard = () => {
  return (
    <Box className={classes.carousel}>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        renderIndicator={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        showArrows={false}
      >
        {testimonials.map((value, index) => {
          return (
            <Draggable key={index}>
              <div>
                <Card className={classes.testimonialCard}>
                  <CardContent sx={{ fontSize: "12px" }}>
                    <div style={{ display: "flex" }}>
                      <Typography sx={{ fontWeight: 600, marginRight: "8px" }}>
                        {value.name}
                      </Typography>
                      <Typography sx={{ fontSize: "10px", lineHeight: '2.5' }}>
                        {value.designation}
                      </Typography>
                    </div>
                    <Typography sx={{ fontSize: "12px", textAlign: "justify" }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Draggable>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default TestimonialCard;
