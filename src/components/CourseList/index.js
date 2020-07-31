import React, { useState } from "react";
import HarryAndBook from "./../../img/HarryAndBook.jpg";
import { Link } from "react-router-dom";

import "./style.scss";

export default function CourseList({ courses }) {
    return (
        <React.Fragment>
            <div className="course-list">
                {/* <Link className="course" to="/course_info">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ЗКТ</p>
                </Link> */}

                {courses.map((e) => {
                    return (
                        <Link className="course" to="/course_info">
                            <img src={HarryAndBook} alt="" />
                            <p>{e.courseName}</p>
                        </Link>
                    );
                })}
                {/* 
                <a className="course" href="https://yadi.sk/d/xknb0ys0pAQHyQ">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ОИБ</p>
                </a>
                <a className="course" href="https://yadi.sk/d/Rqh6EaSs2VDOvA">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ЗПД</p>
                </a>
                <a className="course" href="https://yadi.sk/d/AhzI43nojTpmvQ">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ЗиОКД</p>
                </a>
                <a className="course" href="https://yadi.sk/d/R6bVFHGSnXSNpQ">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ИТЗИ</p>
                </a>
                <a className="course" href="https://yadi.sk/d/eFr3nbfEl3MHqw">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по ОПОИБ</p>
                </a>
                <a className="course" href="https://yadi.sk/d/EhblvdZaRupvoA">
                    <img src={HarryAndBook} alt="" />
                    <p>Лекции по СЗИвВЗС</p>
                </a>
                <a className="course" href="https://yadi.sk/d/ImSx2qawZ5oolA">
                    <img src={HarryAndBook} alt="" />
                    <p>Документоведение</p>
                </a> */}
            </div>
        </React.Fragment>
    );
}
