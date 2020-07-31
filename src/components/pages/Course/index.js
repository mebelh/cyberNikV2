import React from "react";
import ReactPlayer from "react-player";
import InfoCourse from "components/Info_course";

import SideMenu from "components/SideMenu";

import "./style.scss";

export default function Course({ videoURL, shortDesc, longDescArr }) {
    let collapseListID = [
        "#collapseOne",
        "#collapseTwo",
        "#collapseThree",
        "#collapseForu",
        "#collapseFive",
        "#collapseSix",
        "#collapseSeven",
    ];

    let moduleList = [
        {
            moduleName: "Module 1",

            lectures: [
                {
                    name: "О защите",
                    duration: "49 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О защите",
                    duration: "59 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О защите",
                    duration: "39 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },
            ],
        },

        {
            moduleName: "Module 2",

            lectures: [
                {
                    name: "О защите",
                    duration: "49 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О щите",
                    duration: "59 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О защите",
                    duration: "39 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },
            ],
        },

        {
            moduleName: "Module 3",

            lectures: [
                {
                    name: "О защите",
                    duration: "49 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О защите",
                    duration: "59 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },

                {
                    name: "О защите",
                    duration: "39 минут",
                    link: "https://www.youtube.com/watch?v=fuOZZuvKNkI",
                },
            ],
        },
    ];

    return (
        <div className="Course">
            <div className="Course__view">
                <ReactPlayer
                    className="Course__view-ReactPlayer"
                    url={videoURL}
                    width="100%"
                    height="400px"
                    controls={true}
                />
                <InfoCourse
                    className="Info_course"
                    shortDesc={shortDesc}
                    longDescArr={longDescArr}
                />
            </div>
            <SideMenu
                className="SideMenu"
                moduleList={moduleList}
                collapseListID={collapseListID}
            />
        </div>
    );
}
