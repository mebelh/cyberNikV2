import React from "react";
import "./addCourse.scss";
export default function AddCourse() {
    return (
        <form action="http://localhost:3001/course/add" method="POST">
            <h2>Добавить курс:</h2>
            <label>
                <span>Имя курса:</span>
                <input type="text" name="courseName" />
            </label>
            <div>
                <span>Цвет имени курса:</span>
                <input type="color" name="courseNameColor" />
            </div>
            <div>
                <span>Цвет фона:</span>
                <input type="color" name="backgroundColor" />
            </div>
            <div>
                <span>Ссылка на триал видео:</span>
                <input type="text" name="linkOnTrialVideo" />
            </div>
            <div>
                <textarea
                    placeholder="Короткое описание курса"
                    rows="8"
                    cols="80"
                    name="shortDescription"
                />
            </div>
            <div>
                <textarea
                    placeholder="Описание каждого модуля"
                    rows="12"
                    cols="80"
                    name="description"
                />
            </div>
        </form>
    );
}
