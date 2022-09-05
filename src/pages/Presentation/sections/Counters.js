/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={365}
              suffix="+"
              title="Vedených meditací"
              description="Vedená meditace na každý den"
            />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={2}
              suffix="+"
              title="Online kurzy"
              description="Kompletní kurz meditace online"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={10}
              suffix="+"
              title="Meditačních center"
              description="Zajděte si do meditačního centra v blízkosti vašeho bydliště"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Lektorů jógy a meditace"
              description="Zkušení kektoři s více jak třicetiletou plaxí výuky sahadža meditace"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
