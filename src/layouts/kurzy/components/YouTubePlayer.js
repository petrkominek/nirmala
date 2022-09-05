import React from "react";

export default function YouTubePlayer(props){
    const { src,height, width} = props;
    
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={props.src}
          frameBorder="0"
          title=""
        />
      </div>
    );
  };

  