import React from "react";
import "./style.scss";

export default function AddCourse({ setCourse, course }) {
    const onCourseInfoAdd = (key, label) => {
        console.log("asd");
        const newInf = { ...course };
        newInf[key] = label;
        console.log(newInf);
        setCourse(newInf);
    };

    return (
        <form action="http://localhost:3001/course/add" method="POST">
            <h2>Добавить курс:</h2>
            <label>
                <span>Имя курса:</span>
                <input
                    type="text"
                    name="courseName"
                    onChange={({ target }) => {
                        console.log(target.value);
                        onCourseInfoAdd("courseName", target.value);
                    }}
                />
            </label>
            <div>
                <span>Цвет имени курса:</span>
                <input
                    type="color"
                    name="courseNameColor"
                    onChange={({ target }) => {
                        onCourseInfoAdd("courseNameColor", target.value);
                    }}
                />
            </div>
            <div>
                <span>Цвет фона:</span>
                <input
                    type="color"
                    name="backgroundColor"
                    onChange={({ target }) => {
                        onCourseInfoAdd("backgroundColor", target.value);
                    }}
                />
            </div>
            <div>
                <span>Ссылка на триал видео:</span>
                <input
                    type="text"
                    name="linkOnTrialVideo"
                    onChange={({ target }) => {
                        onCourseInfoAdd("linkOnTrialVideo", target.value);
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
                        onCourseInfoAdd("shortDescription", target.value);
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
                        onCourseInfoAdd("description", target.value);
                    }}
                />
            </div>
        </form>
    );
}
