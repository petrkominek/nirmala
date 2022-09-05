import PropTypes from "prop-types";
import BaseLayout from "layouts/sections/components/BaseLayout";
import YouTubePlayer from "components/YouTube/YouTubePlayer";

import TabView from "./components/TabView";

function Kurz({ contentData }) {
  return (
    <BaseLayout
      title={contentData.lessonName}
      breadcrumb={[{ label: "Online Kurzy", route: "../kurzy" }, { label: "Kurz 01" }]}
    >
      <h4>{contentData.lessonDescription}</h4>
      <YouTubePlayer src={contentData.youTubeURL} title={contentData.lessonName} />
      <TabView title="Informace ke kurzu" contentData={contentData} />
    </BaseLayout>
  );
}

Kurz.propTypes = {
  contentData: PropTypes.element.isRequired,
};

export default Kurz;
