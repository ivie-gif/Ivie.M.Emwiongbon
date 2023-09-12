import React from "react";
import { Box, Checkbox, Grid, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

import Card from "../../shared/cards";

import { portfolioContent } from "../../db/portfolioData";

const Index = () => {
  return (
    <Box sx={{ padding: "10%" }}>
      <Typography sx={{ color: "#ff014f" }}>
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </Typography>
      <Typography variant="h2" sx={{ color: "#c4cfde", fontWeight: "bolder", mt: 2 }}>
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
              sx={{marginBottom: '3px'}}
            >
              <Stack direction="row" alignItems="center" spacing={3}>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "750px",
                    marginBottom: "3px",
                  }}
                >
                  {/* <Box> */}
                    <img
                      alt="portfolio images"
                      src={portData.image}
                      style={{
                        padding: "10%",
                        objectFit: "cover",
                        width: "80%",
                        height: "25vh",
                        transition: 'all 0.5s ease-out-in',
                       borderRadius: '10px',
                       animation: "ripple 1.2s infinite ease-in-out"
                      }}
                    />
                  {/* </Box> */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ color: "#ff014f" }}>
                      {portData.devType}
                    </Typography>
                    <Typography>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        sx={{
                          color: "#ff014f",
                          "&::after": {
                            backgroundColor: "#ff014f",
                          },
                        }}
                      />
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#c4cfde",
                      "&:hover": {
                        color: "#ff014f",
                      },
                      textAlign: "left",
                    }}
                  >
                    {portData.paragraph}
                  </Typography>
                </Card>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Index;
