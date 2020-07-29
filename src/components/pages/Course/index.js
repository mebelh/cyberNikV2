import React from "react";
import ReactPlayer from "react-player";
import Info_course from "components/Info_course";

import SideMenu from "components/SideMenu";

import "./style.scss";

export default function Course({ videoURL, shortDesc, longDescArr }) {
  return (
    <div className="Course">
      <div>
        <ReactPlayer
          className="ReactPlayer"
          url={videoURL}
          width="100%"
          height="400px"
          controls={true}
        />
        <Info_course className="Info_course" shortDesc={shortDesc} longDescArr={longDescArr} />
      </div>
      <SideMenu className="SideMenu" />
    </div>
  );
}
