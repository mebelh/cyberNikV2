import React, { useCallback, useEffect } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SideMenu({ modules }) {
    const AddLectureInModule = ({ lectures }) => {
        console.log(lectures);

        return lectures.map((el, index) => (
            <div
                id={`collapse_${index}`}
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
            >
                <ul class="list-group">
                    <li class="list-group-item">
                        <a className="lecture" href={el.link}>
                            <div className="lecture__name">{el.name}</div>
                            <div className="lecture__duration">
                                {el.duration}
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        ));
    };

    const AddModulesInSideMenu = ({ modules = [] }) => {
        return modules.map((el, index) => (
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target={`#collapse_${index}`}
                                aria-expanded="true"
                                aria-controls={"collapse_" + { index }}
                            >
                                {el.name}
                            </button>
                            <span>
                                Количество лекций:{" "}
                                <strong>{el.lectures.length}</strong>
                            </span>
                        </div>
                    </div>
                    <AddLectureInModule lectures={el.lectures} num={index} />
                </div>
            </div>
        ));
    };

    return (
        <div className="sideMenu">
            <AddModulesInSideMenu modules={modules} />
        </div>
    );
}
