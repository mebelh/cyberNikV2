import React, { useState } from "react";
import Lecture from "./Lecture";

export default function Lectures({ n, changeModule }) {
    let arr = [];

    const [lectures, setLectures] = useState([]);

    const onLacturesChange = (id, lecture) => {
        const newLectures = [...lectures];
        newLectures[id] = lecture;
        setLectures(newLectures);
        changeModule("lecturs", lectures);
    };

    for (let i = 0; i < n; i++) {
        arr.push(
            <Lecture num={i} onLacturesChange={onLacturesChange} key={i} />
        );
    }

    return arr;
}
