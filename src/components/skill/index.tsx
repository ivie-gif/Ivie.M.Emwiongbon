import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BorderDivs from "../../shared/borderDivs";
import { Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import {
  frontEnd,
  cssFrameworks,
  backEnd,
  dataBase,
} from "../../db/skillsData";
// import Navbar from "../navbar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Index = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ paddingX: "10%" }} id='skill'>
      <Typography
        sx={{
          color: "#ff014f",
          textAlign: "left",
          pt: 16,
          pb: 1,
          letterSpacing: "1",
          lineHeight: "14px",
        }}
      >
        SKILLS
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#c4cfde",
          fontWeight: "bolder",
          textAlign: "left",
          pb: 10,
        }}
      >
        View All Skills
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 2 }}
        sx={{
          flexGrow: 1,
          display: "flex",
          backgroundColor: "#212529",
        }}
      >
        <Grid item xs={12} lg={6} md={12}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="Vertical tabs example"
            sx={{
              width: { xs: "100%", md: "100%", lg: 400 },
              minWidth: "-webkit-fill-available",
              border: "2px solid #202225",
              borderRadius: "20px",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              label="CSS Framework"
              {...a11yProps(0)}
              sx={{
                boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                py: 5,
                borderRadius: 1,
                color: "#ff014f",
                "&:hover": {
                  color: "#ff014f",
                  backgroundColor: "#212529",
                },
              }}
            />
            <Tab
              label="FrontEnd"
              {...a11yProps(1)}
              sx={{
                color: "#FFFFFF",
                py: 5,

                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                  backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                  borderRadius: 1,
                },
              }}
            />
            <Tab
              label="BackEnd"
              {...a11yProps(2)}
              sx={{
                color: "#FFFFFF",
                py: 5,

                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                  backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                  borderRadius: 1,
                },
              }}
            />
            <Tab
              label="DataBase"
              {...a11yProps(3)}
              sx={{
                color: "#FFFFFF",
                py: 5,
                mb: 2,

                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                  backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                  borderRadius: 1,
                },
              }}
            />
          </Tabs>
        </Grid>

        {/* main tabs second grid */}
        <Grid
          item
          xs={12}
          lg={6}
          md={12}
          sx={{ color: "#c4cfde", marginTop: "-10px" }}
        >
          {/* end of main Tabs second grid */}

          <TabPanel value={value} index={0}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 400,
                marginBottom: "70px",
              }}
            >
              With these CSS frameworks, my creativity knows no bounds! CSS
              frameworks are my trusty toolkit for development to streamline my
              design processes. I can create responsives designs and ensure
              Cross-Browser Compatibility!
            </Typography>
            <Grid
              container
              rowSpacing={1}
              justifyContent="space-between"
              columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
              sx={{ mt: 10, mb: 3, marginTop: "-0.7px" }}
            >
              {cssFrameworks &&
                cssFrameworks.map((css: any) => (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    sx={{ alignItems: "left", justifyItems: "left" }}
                  >
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon />
                      <Typography sx={{ ml: 1 }}>{css}</Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 400,
                marginBottom: "70px",
              }}
            >
              Frontend development is the art of shaping the digital world that
              users see and interact with. My knowledge of these Frontend tools
              is to create captivating interfaces, seamless interactions, and
              delightful user experiences. I think of these tools as a bridge
              that connects my ideas to the screens of my audience.
            </Typography>
            <Grid
              container
              rowSpacing={1}
              justifyContent="space-between"
              columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
              sx={{ mt: 10, mb: 3, marginTop: "-0.7px" }}
            >
              {frontEnd &&
                frontEnd.map((frontEndData: any) => (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    sx={{ alignItems: "left", justifyItems: "left" }}
                  >
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon />
                      <Typography sx={{ ml: 1 }}>{frontEndData}</Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 400,
                marginBottom: "70px",
              }}
            >
              Backend development, is the gears of the digital universe turn,
              and the magic happens behind the scenes. I enjoy writing codes and
              databases that work tirelessly to deliver content, process
              requests, and keep everything running smoothly. From Data
              Management, to core development Functionalities and scalability.
            </Typography>
            <Grid
              container
              rowSpacing={1}
              justifyContent="space-between"
              columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
              sx={{ mt: 10, mb: 3, marginTop: "-0.7px" }}
            >
              {backEnd &&
                backEnd.map((backend: any) => (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    sx={{ alignItems: "left", justifyItems: "left" }}
                  >
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon />
                      <Typography sx={{ ml: 1 }}>{backend}</Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 400,
                marginBottom: "70px",
              }}
            >
              A database is like a digital vault to trove information. With my
              years of experience, I see Database as a tool for Data Storage to
              streamline data management for robust backup and recovery
              solutions, protecting your information from accidents or
              disasters.
            </Typography>
            <Grid
              container
              rowSpacing={1}
              justifyContent="space-between"
              columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
              sx={{ mt: 10, mb: 3, marginTop: "-0.7px" }}
            >
              {dataBase &&
                dataBase.map((db: any) => (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={6}
                    sx={{ alignItems: "left", justifyItems: "left" }}
                  >
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon />
                      <Typography sx={{ ml: 1 }}>{db}</Typography>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
      <BorderDivs />
    </Box>
  );
};

export default Index;
