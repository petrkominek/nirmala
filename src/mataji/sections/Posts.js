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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Více o zakladatelce Sahadža jógy
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Meditace se Šrí Mátadží"
              description="Výběr meditací Šrí Mátadží mezi 1970-2012"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Více",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Přednásky Šrí Mátadží o józe"
              description="Šrí Mátadží neúnavně cestovala po celém světe a zanechala nám mnoho lekcí jak pracuje náš subtilní systém, který je základem pro sebepoznání."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Více",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Šrí Mátadží v Praze"
              description="Šrí Mátadží navštívila Prahu několikrát v 90. letech. Podívejte se na záznam vystoupení."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "Více",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="100 let od narození Šrí Mátadží"
              description="21. 3. 1923 se narodila velká duše, která svým mateřským přístupem a pochopením inspitovala hledače pravdy po celém světě."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "Více",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
