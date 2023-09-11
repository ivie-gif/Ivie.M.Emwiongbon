import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { headerContent } from "../../db/headercontent";
import Typewriter from "typewriter-effect";

import ivieAvatar from "../../assets/ivieHeaderImage-removebg-preview.png";
import linkedInImage from "../../assets/linkedInImage.png";
import githubImage from "../../assets/gitupScreenshot.png";

const Header = () => {
  return (
    <Box sx={{ paddingX: "10%", textAlign: "left" }}>
      <Grid
        container
        rowSpacing={1}
        justifyContent="space-between"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction={{ xs: "row-reverse", md: "row-reverse", lg: "row" }}
      >
        {/* first div */}
        <Grid
          sx={{ width: "50%", marginTop: "19%" }}
          item
          xs={12}
          lg={6}
          md={12}
        >
          {headerContent &&
            headerContent?.map((contentData: any) => {
              return (
                <>
                  <Typography
                    sx={{
                      color: "#c4cfde",
                      letterSpacing: "3px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    {contentData.subIntro}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      marginBottom: "22px",
                      fontWeight: "700",
                      fontSize: "40px",
                    }}
                  >
                    Hi, I’m{" "}
                    <span style={{ color: "#ff014f" }}>
                      Ivie Maryann Emwiongbon
                    </span>{" "}
                    a
                    <Typewriter
                      options={{
                        strings: [
                          "Software Engineer.",
                          "Technical Writer.",
                          "Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Typography>

                  <Typography
                    sx={{
                      color: "#c4cfde",
                      fontSize: "16px",
                      lineHeight: "30px",
                      opacity: "0.9",
                      marginBottom: "60px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: contentData.mainIntro,
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      color: "#c4cfde",
                      marginBottom: "20px",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontWeight: "300",
                    }}
                  >
                    {contentData.socials}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      style={{
                        width: "10%",
                        boxShadow:
                          "25px 25px 30px #1c1e22, -20px -20px 29px #262a2e",
                        backgroundColor:
                          "linear-gradient(145deg, #1e2024, #23272b)",
                      }}
                    >
                      <img
                        alt="Ivie Image"
                        src={linkedInImage}
                        style={{ padding: "5px 10px" }}
                      />
                    </Typography>
                    <Typography
                      style={{
                        boxShadow:
                          "10px 10px 15px #1c1e22, -10px -10px 19px #262a2e",
                        backgroundColor:
                          "linear-gradient(145deg, #1e2024, #23272b)",
                        marginTop: "7px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        alt="Ivie Image"
                        src={githubImage}
                        style={{
                          width: "40%",
                          margin: "10px -30px 0px 15px",
                        }}
                      />
                    </Typography>
                  </Box>
                </>
              );
            })}
        </Grid>

        {/* second div */}
        <Grid item xs={12} lg={6} md={12}>
          <Box
            sx={{
              borderColor: "red",
              boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
              backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
              position: "absolute",
              zIndex: "-1",
              width: { xs: "80%", md: "80%", lg: "40%" },
              height: {
                xs: "calc(100% - 100px)",
                md: "calc(100% - 120px)",
                lg: "calc(100% - 130px)",
              },
              marginTop: "15%",
            }}
          ></Box>
          <img
            alt="Ivie Image"
            src={ivieAvatar}
            style={{
              width: "100%",
              marginTop: "10%",
              height: "calc(100% - 120px)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
