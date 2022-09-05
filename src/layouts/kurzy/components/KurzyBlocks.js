// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

export default function KurzyBlocks({ contentData }) {
  KurzyBlocks.propTypes = {
    contentData: PropTypes.element.isRequired,
  };

  const render12Data = contentData.lessons.map(({ name, img, url, description }) => (
    <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
      <Link to={url}>
        <ExampleCard image={img} name={name} count={1} description={description} />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={3} sx={{ mb: 10 }} key={contentData.title}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                {contentData.title}
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                {contentData.description1}
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              {render12Data}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
