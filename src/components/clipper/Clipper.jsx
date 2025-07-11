import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const pictures = [
  {
    image:
      "https://aboutreact.com/wp-content/uploads/2018/09/react_native_map-1.png",
    title: "Slide 1",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsJoVzGFJL_YZNi049jZK5jR9FS6WmFMvqw&s",
    title: "Slide 2",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/470682672235151360/vI0ZZlhZ_400x400.png",
    title: "Slide 3",
  },
  {
    image: "https://jwt.io/apple-icon/256?c8286793fc3e08ca",
    title: "Slide 4",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/f9/e9/e5f9e91d-6cbd-bd40-44af-0cf8f41222af/logo_authenticator_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png",
    title: "Slide 5",
  },
];

export default function ImageCarousel() {
  return (
    <Box sx={{ width: "50%", maxWidth: "400px", mx: "auto" }}>
      <Carousel
        animation="slide"
        autoPlay
        indicators
        navButtonsAlwaysVisible
        duration={500}
      >
        {pictures.map(({ image, title }) => (
          <Card key={title} sx={{ width: "100%", height: 300 }}>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
}
