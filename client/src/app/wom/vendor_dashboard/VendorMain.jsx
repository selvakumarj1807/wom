import { Fragment } from "react";
import { Card, Grid, styled, useTheme } from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import Campaigns from "./shared/Campaigns";
import StatCards2 from "./shared/StatCards2";
import DoughnutChart from "./shared/Doughnut";
import TopSellingTable from "./shared/TopSellingTable";

import { Link } from "react-router-dom";


// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function VendorDashboard() {
  const { palette } = useTheme();

  return (
    <main id='main' className='main'>

      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i class="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Vendor Dashboard</li>
          </ol>
        </nav>
      </div>
      <Fragment>
        <ContentBox className="analytics">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />
              <TopSellingTable />
              <StatCards2 />

              <H4>Ongoing Projects</H4>
              <RowCards />
            </Grid>

            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Vendor Chart</Title>
                <SubTitle>Last 30 days</SubTitle>

                <DoughnutChart
                  height="300px"
                  color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                />
              </Card>

              {/* <UpgradeCard /> */}
              <Campaigns />
            </Grid>
          </Grid>
        </ContentBox>
      </Fragment>
    </main>
  );
}
