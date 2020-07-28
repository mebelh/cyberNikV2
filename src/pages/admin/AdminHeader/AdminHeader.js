import React, { useContext } from "react";
import "./AdminHeader.scss";

import { Context } from "./../../../context";

export default function Subheader() {
    const { user } = useContext(Context);
    console.log(user);
    if (user.ok) {
        if (user.isAdmin) {
            return (
                <div className="Subheader">
                    <a href="/admin/users">Пользователи</a>
                    <a href="/admin/addCourse">Добавить курс</a>
                </div>
            );
        } else {
            return (
                <div className="Subheader">
                    <a href="/courses/my">Мои курсы</a>
                </div>
            );
        }
    } else {
        return <div className=""></div>;
    }
}
