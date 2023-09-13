import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BorderDivs from "../../shared/borderDivs";
import { Grid } from "@mui/material";

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
    <Box sx={{ paddingX: "10%" }}>
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
        columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 2}}
        sx={{
          flexGrow: 1,
          display: "flex",
          height: 500,
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
              width: {xs: '100%', md: "100%", lg: 400},
              minWidth: '-webkit-fill-available',
              border: "2px solid #202225",
              borderRadius: "20px",
            }}
          >
            <Tab
              label="FrontEnd"
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
            <Tab label="BackEnd" {...a11yProps(1)} sx={{
                color: "#FFFFFF",
                py: 5,
                
                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                borderRadius: 1,
                },
              }} />
            <Tab label="CSS Framework" {...a11yProps(2)}  sx={{
                color: "#FFFFFF",
                py: 5,
                
                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                borderRadius: 1,
                },
              }} />
            <Tab label="DataBase" {...a11yProps(3)}  sx={{
                color: "#FFFFFF",
                py: 5,
                mb: 2,
                
                "&:hover": {
                  color: "#ff014f",
                  boxShadow: "15px 15px 20px #1c1e22, -10px -10px 19px #262a2e",
                backgroundColor: "linear-gradient(145deg, #1e2024, #23272b)",
                borderRadius: 1,
                },
              }} />
          </Tabs>
        </Grid>

        <Grid item xs={12} lg={6} md={12}>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Grid>
      </Grid>
      <BorderDivs />
    </Box>
  );
};

export default Index;
