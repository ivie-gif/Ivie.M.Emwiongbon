import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import BorderDivs from "../../shared/borderDivs";

import { contactContent } from "../../db/contactContent";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../utils/yupValidation";
import { useForm, Controller } from "react-hook-form";

import contactImage from "../../assets/contactImage.png";
import linkedInImage from "../../assets/linkedInImage.png";
import githubImage from "../../assets/gitupScreenshot.png";
import Button from "../../shared/button";
import arrowIcon from "../../assets/arrowStraight.png";


const Index: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // e.preventDefault();
    // You can access the form data from formData here and perform actions like sending it to a server
    // console.log(data);
    reset();
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <TextField
                    type="text"
                    hiddenLabel
                    id="outlined-error"
                    variant="filled"
                    InputProps={{
                      disableUnderline: true, 
                    }}
                    sx={{
                      width: "25ch",
                      border: "2px solid #191b1e",
                      letterSpacing: "1px",
                      boxShadow:
                        "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset", '& .MuiInputBase-input': {
                      color: 'white', 
                    }, 
                    '&:hover': {
                      border: '2px solid #ff014f', 
                    },
                    }} {...field} />}
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
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => <TextField
                    type="tel"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    hiddenLabel
                    id="outlined-error"
                    variant="filled"
                    sx={{
                      width: "25ch",
                      border: "2px solid #191b1e",
                      letterSpacing: "1px",
                      boxShadow:
                        "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset", '& .MuiInputBase-input': {
                      color: 'white',
                    }, 
                    '&:hover': {
                      border: '2px solid #ff014f', 
                    },
                    }} {...field} />}
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

              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField
                hiddenLabel
                id="outlined-error"
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                sx={{
                  border: "2px solid #191b1e",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset", '& .MuiInputBase-input': {
                      color: 'white',
                    }, 
                    '&:hover': {
                      border: '2px solid #ff014f',
                    },
                }}{...field} />}
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
              <Controller
                name="subject"
                control={control}
                render={({ field }) => <TextField
                type="text"
                hiddenLabel
                id="outlined-error"
                variant="filled"
                InputProps={{
                  disableUnderline: true, 
                }}
                fullWidth
                sx={{
                  border: "2px solid #191b1e",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset", '& .MuiInputBase-input': {
                      color: 'white', 
                    }, 
                    '&:hover': {
                      border: '2px solid #ff014f', 
                    },
                }} {...field} />}
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
              <Controller
                name="message"
                control={control}
                render={({ field }) => <TextField
                type="message"
                hiddenLabel
                id="outlined-error"
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                multiline
                rows={10}
                sx={{
                  border: "2px solid #191b1e",
                  letterSpacing: "1px",
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                    '& .MuiInputBase-input': {
                      color: 'white',
                    }, 
                    '&:hover': {
                      border: '2px solid #ff014f', 
                    },
                }} {...field} />}
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
