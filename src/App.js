import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Zkt_info from "./pages/courses/Zkt/Zkt_info/Zkt_info";
import Zkt_course from "./pages/courses/Zkt/Zkt_course/Zkt_course";
import SignIn from "./pages/auth/SignIn/SignIn";
import SignUp from "./pages/auth/SignUp/SignUp";

import Films from "./pages/Films/Films";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/zkt_info"} component={Zkt_info} />
                    <Route path={"/zkt_course"} component={Zkt_course} />
                    <Route path={"/auth/login"} component={SignIn} />
                    <Route path={"/auth/register"} component={SignUp} />

                    {/* <Route path={'/about'} component={About} /> */}
                    {/* <Route path={'/lectures'} component={Lectures} /> */}
                    {/* <Route path={'/library'} component={Libriary} /> */}
                    <Route path={"/films"} component={Films} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
