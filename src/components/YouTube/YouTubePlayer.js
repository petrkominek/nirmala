// import React from "react";
import PropTypes from "prop-types";

function YouTubePlayer({ src, title }) {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        src={src}
        frameBorder="0"
        title={title}
      />
    </div>
  );
}

YouTubePlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YouTubePlayer;
