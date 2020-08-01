import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import InfoCourse from "components/Info_course";

import SideMenu from "components/SideMenu";

import "./style.scss";

export default function Course({ match }) {
    const courseId = match.params.id;

    const [course, setCourse] = useState({});

    const [lecture, setLecture] = useState({});

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetch(`http://localhost:3001/courses/${courseId}/${user.login}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
        }).then(async (e) => {
            setCourse(await e.json());
        });
    }, []);

    console.log(course);

    return (
        <div className="Course">
            <div className="Course__view">
                <ReactPlayer
                    className="Course__view-ReactPlayer"
                    url={course.linkOnTrialVideo}
                    width="100%"
                    height="400px"
                    controls={true}
                />
                <InfoCourse
                    className="Info_course"
                    shortDescription={course.shortDescription}
                    description={course.description}
                />
            </div>
            <SideMenu className="SideMenu" modules={course.modules} />
        </div>
    );
}
