import React, { useState, useContext } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Course from "./components/pages/Course";
import Course_info from "components/pages/Course_info";
import SignIn from "./components/pages/auth/SignIn";
import SignUp from "./components/pages/auth/SignUp";
import Users from "./components/admin/Users";
// import Films from "./components/pages/courses/Films";
import AdminHeader from "./components/admin/AdminHeader";
import PageaddCourse from "./components/pages/PageAddCourse";

import { Context } from "./context";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";


export default function App() {
    const [user, setUser] = useState(undefined);

    const onUserLogin = (user) => {
        setUser(user);
    };

    return (
        <Context.Provider value={{ onUserLogin }}>
            <div className="App">
                <Header />
                <AdminHeader />
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={Home} />
                        <Route path={"/course_info"} component={Course_info} />
                        <Route path={"/course"} component={Course} />
                        <Route path={"/auth/login"} component={SignIn} />
                        <Route path={"/auth/register"} component={SignUp} />
                        <Route path={"/admin/addCourse"} component={PageaddCourse} />
                        <Route path={"/admin/users"} component={Users} />
                        {/* <Route path={'/about'} component={About} /> */}
                        {/* <Route path={'/lectures'} component={Lectures} /> */}
                        {/* <Route path={'/library'} component={Libriary} /> */}
                        {/* <Route path={"/films"} component={Films} /> */}
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </Context.Provider>
    );
}
