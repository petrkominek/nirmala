import React, { useEffect } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

class InfoAreaY2 extends React.PureComponent {
  componentDidMount() {
    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      //this.loadVideo();
    }
  }

  loadVideo = () => {
    const idkey = this.props.idkey;
    const youtubeTag = `youtube-player-${idkey}`;
    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(youtubeTag, {
      videoId: idkey,
      height: "169",
      width: "300",
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady(event) {
    event.target.playVideo();
  }

  render() {
    const { idkey, img, title } = this.props;
    return (
      <MKBox>
        <div id={`youtube-player-${idkey}`} onClick={this.loadVideo}>
          <img src={img} alt={title} width="300" />
        </div>
        <div>
          <MKTypography variant="h6" fontWeight="bold">
            {title}
          </MKTypography>
        </div>
      </MKBox>
    );
  }
}

InfoAreaY2.propTypes = {
  title: PropTypes.string.isRequired,
  idkey: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default InfoAreaY2;
/*
return (
  <a href="#" onClick={() => this.loadVideo(idkey)}>
    <MKBox>
      <div id={idkey}>
        <img src={img} alt={title} width="300" />
      </div>
      <div>
        <MKTypography variant="h6" fontWeight="bold">
          {title}
        </MKTypography>
        <MKTypography>{description}</MKTypography>
      </div>
    </MKBox>
  </a>
);
*/
