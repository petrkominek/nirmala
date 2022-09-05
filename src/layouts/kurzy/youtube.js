// mport { useEffect, useState } from "react";
import { useAsync } from "react-async";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
//import ExampleCard from "pages/Presentation/components/ExampleCard";
import InfoAreaY2b from "layouts/kurzy/components/InfoAreaY2b";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// import View from "layouts/sections/components/View";

const fetchUsersList = async ({ signal }) => {
  const res = await fetch(
    "https://meditacevideos.vercel.app/api/videos/PLIgHG0q8MD01ch0iFwTjIY587lxxrwVEW",
    { signal }
  );
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

function getMonthName(month) {
  switch (month) {
    case 1:
      return "leden";
      break;
    case 2:
      return "únor";
      break;
    case 3:
      return "březen";
      break;
    case 4:
      return "duben";
      break;
    case 5:
      return "květen";
      break;
    case 6:
      return "červen";
      break;
    case 7:
      return "červenec";
      break;
    case 8:
      return "srpen";
      break;
    case 9:
      return "září";
      break;
    case 10:
      return "říjen";
      break;
    case 11:
      return "listopad";
      break;
    case 12:
      return "prosinec";
      break;
  }
  return "";
}

function Youtube() {
  const { data, error, isPending } = useAsync({ promiseFn: fetchUsersList });
  if (isPending) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;

  return (
    <BaseLayout
      title="Online kurzy meditace"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Online meditace" },
      ]}
    >
      <MKBox component="section" my={6} py={6}>
        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3} sx={{ mb: 10 }} key="this_Month">
            <Grid item xs={12} lg={3}>
              <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
                <MKTypography variant="h3" fontWeight="bold" mb={1}>
                  <div>{getMonthName(new Date().getMonth() + 1)}</div>
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  meditace na každý den
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={3}>
                {data.items.map(({ snippet = {} }) => {
                  const {
                    title,
                    description,
                    publishedAt,
                    thumbnails = {},
                    resourceId = {},
                  } = snippet;
                  const { medium } = thumbnails;
                  var { img_medium } = "";
                  var youtubePublishedDate = new Date(publishedAt);
                  if (medium && youtubePublishedDate.getMonth() == new Date().getMonth()) {
                    return (
                      <Grid item xs={12} md={4} sx={{ mb: 2 }} key={resourceId.videoId}>
                        <InfoAreaY2b
                          title={title}
                          idkey={resourceId.videoId}
                          img={thumbnails.medium.url}
                          description={description}
                        />
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3} sx={{ mb: 10 }} key="last_Month">
            <Grid item xs={12} lg={3}>
              <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
                <MKTypography variant="h3" fontWeight="bold" mb={1}>
                  <div>{getMonthName(new Date().getMonth())}</div>
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  meditace na každý den
                </MKTypography>
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={3}>
                {data.items.map(({ snippet = {} }) => {
                  const {
                    title,
                    description,
                    publishedAt,
                    thumbnails = {},
                    resourceId = {},
                  } = snippet;
                  const { medium } = thumbnails;
                  var { img_medium } = "";
                  var youtubePublishedDate = new Date(publishedAt);
                  if (medium && youtubePublishedDate.getMonth() == new Date().getMonth() - 1) {
                    return (
                      <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
                        <InfoAreaY2b
                          idkey={resourceId.videoId}
                          img={thumbnails.medium.url}
                          title={title}
                          description={description}
                        />
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </BaseLayout>
  );
}

export default Youtube;
