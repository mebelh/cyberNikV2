import React from "react";
import AddCourse from "../addCourse";
import AddModules from "../AddModules/AddModules";

export default function PageAddCourse() {
    return (
        <form action="http://localhost:3001/courses/add" method="post">
            <AddCourse />
            <AddModules />
            <button type="submit" className="btn btn-success">
                Добавить курс
            </button>
        </form>
    );
}
