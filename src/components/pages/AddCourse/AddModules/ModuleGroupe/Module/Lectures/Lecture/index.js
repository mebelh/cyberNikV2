import React, { useState } from "react";
import "./style.scss";

export default function Lecture({ onLacturesChange, num }) {
    const [lecture, setLecture] = useState({});

    const onLactureChange = (key, label) => {
        setLecture({ ...lecture, [key]: label });
        onLacturesChange(num, lecture);
        console.log(lecture);
    };

    return (
        <div key={num} className="Lecture">
            <div>
                <span>Имя лекции:</span>
                <input
                    value={lecture.name}
                    type="text"
                    onChange={({ target }) => {
                        onLactureChange("name", target.value);
                    }}
                />
            </div>
            <div>
                <span>Продолжительность:</span>
                <input
                    value={lecture.duration}
                    type="text"
                    onChange={({ target }) => {
                        onLactureChange("duration", target.value);
                    }}
                />
            </div>
            <div>
                <span>Ссылка:</span>
                <input
                    value={lecture.link}
                    type="text"
                    onChange={({ target }) => {
                        onLactureChange("link", target.value);
                    }}
                />
            </div>
        </div>
    );
}
