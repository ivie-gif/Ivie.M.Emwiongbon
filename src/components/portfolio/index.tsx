import React, { useState } from "react";
import { Box, Checkbox, Grid, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import Card from "../../shared/cards";

import { portfolioContent } from "../../db/portfolioData";
import TruncateText from "../../utils/truncateFunc";
import BorderDivs from "../../shared/borderDivs";

const Index = () => {
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
                          borderRadius: "10px",
                          opacity: 0.3
                        }}
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      textAlign: 'left',
                      px: 2,
                      pt: 5,
                    }}
                  >
                    <Typography sx={{ color: "#ff014f" }}>
                      {portData.devType}
                    </Typography>
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
      <BorderDivs />
    </Box>
  );
};

export default Index;

