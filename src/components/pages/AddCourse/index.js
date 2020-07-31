import React, { useState } from "react";
import "./style.scss";
import AddModules from "./AddModules";
import Button from "components/Button";
export default function AddCourse() {
    const [course, setCourse] = useState({});

    const onInfAdd = (key, label) => {
        setCourse({ ...course, [key]: label });
    };

    const fetchCourse = async (e) => {
        e.preventDefault();
        // await fetch("http://localhost:3001/admin/addcourse", {});
        console.log(course);
    };

    return (
        <form
            className="addCourse"
            onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={fetchCourse}
        >
            <div className="addCourse__left">
                <h2>Добавить курс:</h2>
                <label>
                    <span>Имя курса:</span>
                    <input
                        type="text"
                        name="courseName"
                        onChange={({ target }) => {
                            onInfAdd("courseName", target.value);
                        }}
                    />
                </label>
                <div>
                    <span>Цвет имени курса:</span>
                    <input
                        type="color"
                        name="courseNameColor"
                        onChange={({ target }) => {
                            onInfAdd("courseNameColor", target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Цвет фона:</span>
                    <input
                        type="color"
                        name="backgroundColor"
                        onChange={({ target }) => {
                            onInfAdd("backgroundColor", target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Ссылка на триал видео:</span>
                    <input
                        type="text"
                        name="linkOnTrialVideo"
                        onChange={({ target }) => {
                            onInfAdd("linkOnTrialVideo", target.value);
                        }}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Короткое описание курса"
                        rows="8"
                        cols="80"
                        name="shortDescription"
                        onChange={({ target }) => {
                            onInfAdd("shortDescription", target.value);
                        }}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Описание каждого модуля"
                        rows="12"
                        cols="80"
                        name="description"
                        onChange={({ target }) => {
                            onInfAdd("description", target.value);
                        }}
                    />
                </div>
            </div>

            <div className="addCourse__right">
                <AddModules onInfAdd={onInfAdd} />
                <Button
                    className="addCourse__btn"
                    label="Добавить курс"
                    bgc="#16ba58"
                    type="submit"
                />
            </div>
        </form>
    );
}
