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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";
import KurzyBlock from "layouts/kurzy/components/KurzyBlocks";

// PageHeaders page components
// import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
// import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

const contentData12 = require(`./Data2/lessonList.json`);
const contentData10 = require(`./Data1/lessonList.json`);
const contentDataLive = require(`./DataOnline/lessonList.json`);

function PageHeaders() {
  return (
    <BaseLayout
      title="Online kurzy meditace"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Online meditace" },
      ]}
    >
      <span id="zive-kurzy" />
      <KurzyBlock contentData={contentDataLive} />
      <span id="kurzy12" />
      <KurzyBlock contentData={contentData12} />
      <span id="kurzy10" />
      <KurzyBlock contentData={contentData10} />
    </BaseLayout>
  );
}

export default PageHeaders;
