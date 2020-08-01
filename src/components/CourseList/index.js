import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export default function CourseList() {
    // Получение списка курсов

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/courses/all", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "content-type": "application/json",
            },
        }).then(async (e) => {
            setCourses(await e.json());
        });
    }, []);

    return (
        <React.Fragment>
            <div className="course-list">
                {courses.map((e) => {
                    console.log(e);
                    return (
                        <Link className="course" to={`/course/${e.link}`}>
                            {/* <img src={HarryAndBook} alt="" /> */}
                            <div
                                className="course__img"
                                style={{
                                    backgroundImage: `url(${e.backgroundImageLink})`,
                                }}
                            ></div>
                            <p
                                style={{
                                    color: e.courseNameColor,
                                }}
                            >
                                {e.courseName}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
