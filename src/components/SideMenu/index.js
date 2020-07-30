import React, { useEffect } from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SideMenu({ moduleList, collapseListID }) {
    const AddLectureInModule = ({ lectures, num }) => {
        // console.log(num)

        return lectures.map((el) => (
            <div
                id={`collapse_${num}`}
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

    const AddModulesInSideMenu = ({ moduleList }) => {
        return moduleList.map((el, num) => (
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target={`#collapse_${num}`}
                                aria-expanded="true"
                                aria-controls={"collapse_" + { num }}
                            >
                                {el.moduleName}
                            </button>
                        </h2>
                    </div>
                    {/* {console.log(num)} */}
                    <AddLectureInModule lectures={el.lectures} num={num} />
                </div>
            </div>
        ));
    };

    return (
        <div className="sideMenu">
            <AddModulesInSideMenu moduleList={moduleList} />
        </div>
    );
}
