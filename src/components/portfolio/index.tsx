import React, { useState } from "react";
import { Box, Checkbox, Grid, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import Card from "../../shared/cards";

import { portfolioContent } from "../../db/portfolioData";
import TruncateText from "../../utils/truncateFunc";

const Index = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoved, setIsLoved] = useState<boolean>(false);

  const HandleCount = () => {
    if (isLoved) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
    setIsLoved(!isLoved);
  };

  document.addEventListener("DOMContentLoaded", function () {
    const likeButton:any = document.getElementById("like-button");
    let isLiked = false;

    likeButton.addEventListener("click", function () {
        isLiked = !isLiked;
        if (isLiked) {
            likeButton.classList.add("liked");
        } else {
            likeButton.classList.remove("liked");
        }
    });
});

  return (
    <Box sx={{ padding: "10%" }}>
      <Typography sx={{ color: "#ff014f" }}>
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </Typography>
      <Typography
        variant="h2"
        sx={{ color: "#c4cfde", fontWeight: "bolder", mt: 2 }}
      >
        My Projects
      </Typography>
      <Grid
        container
        rowSpacing={1}
        justifyContent="space-between"
        columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        sx={{ mt: 10, mb: 3 }}
      >
        {portfolioContent &&
          portfolioContent?.map((portData: any) => (
            <Grid
              item
              xs={12}
              lg={4}
              md={12}
              justifyContent="space-between"
              spacing={3}
              sx={{ marginBottom: "3px" }}
            >
              <Stack direction="row" alignItems="center" spacing={3} sx={{mb: 5}}>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "750px",
                    // marginBottom: "5px",
                  }}
                >
                  <Box
                    sx={{
                      "&:hover": {
                        opacity: [0.9, 0.8, 0.7],
                        transition: "all 0.5s ease-in-out",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <a href={portData.links} target="_blank">
                      <img
                        alt="portfolio images"
                        className="TestThing"
                        src={portData.image}
                        style={{
                          padding: "40% -2% !important",
                          marginTop: "20px",
                          objectFit: "cover",
                          width: "90%",
                          height: "30vh",
                          borderRadius: "20px",
                        }}
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                      pt: 5,
                    }}
                  >
                    <Typography sx={{ color: "#ff014f" }}>
                      {portData.devType}
                    </Typography>

                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <Checkbox
                        id="like-button"
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          onClick={HandleCount}
                          sx={{
                            color: "#ff014f",
                            marginTop: "-10px",
                            "&::after": {
                              backgroundColor: "#ff014f",
                            },
                          }}
                        />
                      </Typography>
                      <Typography sx={{ color: "#ff014f" }}>{count}</Typography>
                    </Box>
                  </Box>
                  <a
                    href={portData.links}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#c4cfde",
                        px: 2,
                        py: 3,
                        "&:hover": {
                          color: "#ff014f",
                        },
                        textAlign: "left",
                      }}
                    >
                      {portData.paragraph
                        ? TruncateText(portData.paragraph, 56)
                        : "--"} 
                    <Typography sx={{display: 'none', "&:hover": {
                      display: 'block'
                    }}}>
                    <img alt='arrowImage' src={portData.icon} />
                    </Typography>
                    </Typography>
                  </a>
                </Card>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Index;

