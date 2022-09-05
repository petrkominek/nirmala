/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import Home from "layouts/pages/";
// Material Kit 2 React routes
import routes from "routes";
import Kurzy01 from "layouts/pages/kurzy/kurz01";
import Kurzy02 from "layouts/pages/kurzy/kurz02";
import Kurzy03 from "layouts/pages/kurzy/kurz03";
import Kurzy04 from "layouts/pages/kurzy/kurz04";
import Kurzy05 from "layouts/pages/kurzy/kurz05";
import Kurzy06 from "layouts/pages/kurzy/kurz06";
import Kurzy07 from "layouts/pages/kurzy/kurz07";
import Kurzy08 from "layouts/pages/kurzy/kurz08";
import Kurzy09 from "layouts/pages/kurzy/kurz09";
import Kurzy10 from "layouts/pages/kurzy/kurz10";
import Kurzy11 from "layouts/pages/kurzy/kurz11";
import Kurzy12 from "layouts/pages/kurzy/kurz12";
import Youtube from "layouts/pages/kurzy/youtube365";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/kurz01" element={<Kurzy01 />} />
        <Route path="/kurz02" element={<Kurzy02 />} />
        <Route path="/kurz03" element={<Kurzy03 />} />
        <Route path="/kurz04" element={<Kurzy04 />} />
        <Route path="/kurz05" element={<Kurzy05 />} />
        <Route path="/kurz06" element={<Kurzy06 />} />
        <Route path="/kurz07" element={<Kurzy07 />} />
        <Route path="/kurz08" element={<Kurzy08 />} />
        <Route path="/kurz09" element={<Kurzy09 />} />
        <Route path="/kurz10" element={<Kurzy10 />} />
        <Route path="/kurz11" element={<Kurzy11 />} />
        <Route path="/kurz12" element={<Kurzy12 />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
