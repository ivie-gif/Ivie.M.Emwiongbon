import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import BorderDivs from "../../shared/borderDivs";

import { contactContent } from "../../db/contactContent";

import contactImage from "../../assets/contactImage.png";
import linkedInImage from "../../assets/linkedInImage.png";
import githubImage from "../../assets/gitupScreenshot.png";
import Button from "../../shared/button";
import arrowIcon from "../../assets/arrowStraight.png";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can access the form data from formData here and perform actions like sending it to a server
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box sx={{ paddingX: "10%" }}>
      <Typography sx={{ color: "#ff014f" }}>Contact</Typography>
      <Typography
        variant="h2"
        sx={{ color: "#c4cfde", fontWeight: "bolder", mt: 2 }}
      >
        Contact Me
      </Typography>

      <Grid
        container
        rowSpacing={1}
        justifyContent="space-between"
        columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
        sx={{ mt: 10, mb: 8 }}
      >
        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              padding: "30px",
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              borderRadius: "10px",
              backgroundColor: "#212428",
            }}
          >
            <img
              src={contactImage}
              alt="Contact Image"
              style={{
                padding: "40% -2% !important",
                objectFit: "cover",
                width: "90%",
                borderRadius: "10px",
              }}
            />
            {contactContent.map((contactDetail, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: "29px",
                    lineHeight: "44px",
                    color: "#E4E6EA",
                    marginBottom: "9px",
                    textAlign: "left",
                    pt: 5,
                    pl: 4,
                  }}
                >
                  {contactDetail.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#878e99",
                    marginBottom: "20px",
                    textAlign: "left",
                    pl: 4,
                  }}
                >
                  {contactDetail.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#878e99",
                    marginBottom: "20px",
                    textAlign: "left",
                    pl: 4,
                  }}
                >
                  {contactDetail.paragraph}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#878e99",
                    textAlign: "left",
                    pl: 4,
                  }}
                >
                  {contactDetail.phone}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    color: "#878e99",
                    marginBottom: "20px",
                    textAlign: "left",
                    pl: 4,
                  }}
                >
                  {contactDetail.email}
                </Typography>
                <Typography
                  sx={{
                    color: "#878e99",
                    marginBottom: "20px",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontWeight: "300",
                    textAlign: "left",
                    pt: 5,
                    pl: 4,
                  }}
                >
                  {contactDetail.socials}
                </Typography>
                <Box sx={{ display: "flex", pl: 4 }}>
                  <a
                    href="http://www.linkedin.com/in/ivie-maryann-emwiongbon"
                    target="_blank"
                  >
                    <Typography
                      style={{
                        width: "10%",
                      }}
                    >
                      <img
                        alt="Ivie Image"
                        src={linkedInImage}
                        style={{
                          padding: "5px 10px",
                          boxShadow:
                            "25px 25px 30px #1c1e22, -20px -20px 29px #262a2e",
                        }}
                      />
                    </Typography>
                  </a>
                  <a href="https://github.com/ivie-gif" target="_blank">
                    <Typography
                      style={{
                        marginLeft: "20px",
                        boxShadow:
                          "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                        backgroundColor:
                          "linear-gradient(145deg, #1e2024, #23272b)",
                      }}
                    >
                      <img
                        alt="Ivie Image"
                        src={githubImage}
                        style={{
                          width: "40%",
                          marginTop: "15px",
                          margin: "15px -20px 9px -10px",
                        }}
                      />
                    </Typography>
                  </a>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              padding: "30px",
              boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
              borderRadius: "10px",
              backgroundColor: "#212428",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "auto",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#a0a8b3",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      marginBottom: "14px",
                    }}
                  >
                    NAME
                  </Typography>
                  <TextField
                    type="text"
                    hiddenLabel
                    id="outlined-error"
                    variant="filled"
                    color="error"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    sx={{
                      width: "25ch",
                      border: "2px solid #191b1e",
                      color: "#c4cfde",
                      letterSpacing: "1px",
                      boxShadow:
                        "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                    }}
                  />
                </Box>
                <Box sx={{ width: "25ch" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#a0a8b3",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      marginBottom: "14px",
                    }}
                  >
                    PHONE NUMBER
                  </Typography>
                  <TextField
                    type="tel"
                    color="error"
                    hiddenLabel
                    id="outlined-error"
                    variant="filled"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    sx={{
                      width: "25ch",
                      border: "2px solid #191b1e",
                      color: "#c4cfde",
                      letterSpacing: "1px",
                      boxShadow:
                        "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "12px",
                  color: "#a0a8b3",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  marginBottom: "14px",
                  mt: 4,
                }}
              >
                EMAIL
              </Typography>
              <TextField
                hiddenLabel
                id="outlined-error"
                variant="filled"
                color="error"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                sx={{
                  border: "2px solid #191b1e",

                  color: "#c4cfde",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
              />

              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "12px",
                  color: "#a0a8b3",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  marginBottom: "14px",
                  mt: 4,
                }}
              >
                SUBJECT
              </Typography>
              <TextField
                type="text"
                hiddenLabel
                id="outlined-error"
                variant="filled"
                color="error"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                fullWidth
                sx={{
                  border: "2px solid #191b1e",

                  color: "#c4cfde",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
              />

              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "12px",
                  color: "#a0a8b3",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  marginBottom: "14px",
                  mt: 4,
                }}
              >
                MESSAGE
              </Typography>
              <TextField
                type="message"
                hiddenLabel
                id="outlined-error"
                variant="filled"
                color="error"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={10}
                sx={{
                  border: "2px solid #191b1e",
                  color: "#c4cfde",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                  "&#outlined-error.MuiInputBase-input.MuiFilledInput-input.MuiInputBase-inputMultiline.MuiInputBase-inputHiddenLabel.css-7209ej-MuiInputBase-input-MuiFilledInput-input":
                    {
                      color: "white",
                    },
                }}
              />
              <Button
                type="submit"
                sx={{
                  borderRadius: "6px",
                  boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
                  width: "100%",
                  mt: 5,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      color: "#ff014f",
                      fontSize: "14px",
                      fontWeight: "500",
                      position: "relative",
                      zIndex: 2,
                      pt: 1,
                      pb: 2,
                    }}
                  >
                    SEND MESSAGE
                  </Typography>
                  <Typography sx={{ pt: 1 }}>
                    <img
                      src={arrowIcon}
                      alt="arrow button"
                      style={{ marginLeft: "4px", width: "70%" }}
                    />
                  </Typography>
                </Box>
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>

      <BorderDivs />
    </Box>
  );
};

export default Index;
