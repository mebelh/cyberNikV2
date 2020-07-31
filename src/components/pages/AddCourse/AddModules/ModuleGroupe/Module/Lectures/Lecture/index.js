import React, { useState } from "react";
import "./style.scss";
const { v4: uuidv4 } = require("uuid");

export default function Lecture({ onLacturesChange, num }) {
    const [lecture, setLecture] = useState({});

    const onLactureChange = (key, label) => {
        setLecture({ ...lecture, [key]: label });
        onLacturesChange(lecture, num);
    };

    return (
        <div key={uuidv4()} className="Lecture">
            <div>
                <span>Имя лекции:</span>
                <input
                    value={lecture.name}
                    onChange={({ target }) => {
                        onLactureChange("name", target.value);
                    }}
                />
            </div>
            <div>
                <span>Продолжительность:</span>
                <input
                    value={lecture.duration}
                    onChange={({ target }) => {
                        onLactureChange("duration", target.value);
                    }}
                />
            </div>
            <div>
                <span>Ссылка:</span>
                <input
                    value={lecture.link}
                    onChange={({ target }) => {
                        onLactureChange("link", target.value);
                    }}
                />
            </div>
        </div>
    );
}
