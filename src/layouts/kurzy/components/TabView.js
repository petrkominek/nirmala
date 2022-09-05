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

import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
// import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import YouTubePlayer from "components/YouTube/YouTubePlayer";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TabView({ contentData, title, height, ...rest }) {
  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="body1" pt={0.5}>
              {title}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="Průvodce"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Teorie"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Další videa"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Časté otázky"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox bgColor="grey-100" width="100%" height={height} borderRadius="xl">
            <Grid container spacing={3} item xs={12} mx="auto">
              <Grid item md={5}>
                {contentData.guideLeft.map((s) => (
                  <p key={Math.random()} align="justify">
                    {s}
                  </p>
                ))}
              </Grid>
              <Grid item md={5}>
                {contentData.guideRight.map((s) => (
                  <p key={Math.random()} align="justify">
                    {s}
                  </p>
                ))}
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            <Container>
              <Grid container spacing={2} item xs={12} lg={10} mx="auto">
                <Grid item xs={12} md={5}>
                  {contentData.theoryLeft.map((s) => (
                    <p key={Math.random()} align="justify">
                      {s}
                    </p>
                  ))}
                </Grid>
                <Grid item xs={12} md={5}>
                  {contentData.theoryLeft.map((s) => (
                    <p key={Math.random()} align="justify">
                      {s}
                    </p>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 2 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
          >
            <Container>
              <Grid container spacing={2} item xs={12} lg={10} mx="auto">
                <Grid item xs={12} md={5}>
                  {contentData.youtubeVideosLeft.map((s) => (
                    <YouTubePlayer src={s} key={Math.random()} />
                  ))}
                </Grid>
                <Grid item xs={12} md={5}>
                  {contentData.youtubeVideosRight.map((s) => (
                    <YouTubePlayer src={s} key={Math.random()} />
                  ))}
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 3 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox bgColor="grey-100" width="100%" height={height} borderRadius="xl">
            <Grid container spacing={2} item xs={12} lg={10} mx="auto">
              <Grid item xs={12} md={5}>
                {contentData.faqLeft.map((faq) => (
                  <div key={Math.random()}>
                    <h4>{faq.question}</h4>
                    <p align="justify">{faq.answer}</p>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} md={5}>
                {contentData.faqRight.map((faq) => (
                  <div key={Math.random()}>
                    <h4>{faq.question}</h4>
                    <p align="justify">{faq.answer}</p>
                  </div>
                ))}
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the View
TabView.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
TabView.propTypes = {
  contentData: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default TabView;
