import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Zkt_info from "./pages/courses/Zkt/Zkt_info/Zkt_info";
import Zkt_course from "./pages/courses/Zkt/Zkt_course/Zkt_course";
import SignIn from "./pages/auth/SignIn/SignIn";
import SignUp from "./pages/auth/SignUp/SignUp";
import SignOut from "./pages/auth/SignOut";
import Users from "./pages/admin/Users/Users";
import Films from "./pages/Films/Films";
import AdminHeader from "./pages/admin/AdminHeader/AdminHeader";

import { Context } from "./context";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

import PageaddCourse from "./pages/admin/PageAddCourse/PageAddCourse";

export default function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const raw =
            localStorage.getItem("user") ||
            localStorage.getItem("user") ||
            JSON.stringify({});
        setUser(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const onUserLogin = (user) => {
        setUser(user);
    };

    return (
        <Context.Provider value={{ onUserLogin, setUser, user }}>
            <div className="App">
                <Header />
                <AdminHeader />
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={Home} />
                        <Route path={"/zkt_info"} component={Zkt_info} />
                        <Route path={"/zkt_course"} component={Zkt_course} />
                        <Route path={"/auth/login"} component={SignIn} />
                        <Route path={"/auth/register"} component={SignUp} />
                        <Route path={"/auth/logout"} component={SignOut} />
                        <Route
                            path={"/admin/addCourse"}
                            component={PageaddCourse}
                        />
                        <Route path={"/admin/users"} component={Users} />
                        {/* <Route path={'/about'} component={About} /> */}
                        {/* <Route path={'/lectures'} component={Lectures} /> */}
                        {/* <Route path={'/library'} component={Libriary} /> */}
                        <Route path={"/films"} component={Films} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </Context.Provider>
    );
}
