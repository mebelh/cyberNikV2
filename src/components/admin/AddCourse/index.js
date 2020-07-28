import React from "react";
import "./style.scss";
export default function AddCourse() {
    return (
        <form action="http://localhost:3001/admin/addcourse">
            <h2>Добавить курс:</h2>
            <label>
                <span>Имя курса:</span>
                <input type="text" name="name" />
            </label>
            <div>
                <span>Цвет имени курса:</span>
                <input type="color" />
            </div>
            <div>
                <span>Цвет фона:</span>
                <input type="color" />
            </div>
            <div>
                <textarea
                    placeholder="Короткое описание курса"
                    rows="8"
                    cols="80"
                />
            </div>
            <div>
                <textarea
                    placeholder="Описание каждого модуля"
                    rows="12"
                    cols="80"
                />
            </div>
            <button type="submit" className="btn btn-success">
                Добавить курс
            </button>
        </form>
    );
}
