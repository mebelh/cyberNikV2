import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function SideMenu_course() {
    return (
        <div className="sideMenu">
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Модуль 1
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    49 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    55 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    45 минут
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                            >
                                Модуль 2
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" href="#">
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    49 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    55 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    45 минут
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Модуль 3
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" href="#">
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    49 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    55 минут
                                </div>
                            </a>
                            <a className="lecture" href="#">
                                <div className="lecture__name">О защите</div>
                                <div className="lecture__duration">
                                    45 минут
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
