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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Vyzkoušejte
                    <br />
                    Meditaci na probuzení jemné energie
                  </>
                }
                description="Jemná energie je uložena v naší krížové kosti."
              />
              <RotatingCardBack
                image={bgBack}
                title="Pohodlně se posaďte"
                description="Krátká meditace na probuzení jemné energie nezabere více jak 10 minut."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "spustit meditaci",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="info"
                  icon="content_copy"
                  title="Co je sahadža jóga?"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "internal",
                    route: "/sahadzajoga",
                    label: "Více",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="info"
                  icon="content_copy"
                  title="Jak začít?"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "internal",
                    route: "/jakzacit",
                    label: "Více",
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="info"
                  icon="content_copy"
                  title="Kurzy v regionech a online"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "internal",
                    route: "/kurzy",
                    label: "Více",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FilledInfoCard
                  color="info"
                  icon="content_copy"
                  title="Zakladatelka sahadža jógy"
                  description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                  action={{
                    type: "internal",
                    route: "/mataji",
                    label: "Více",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
