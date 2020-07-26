import React from "react";
import Poster from "./../../components/Poster";
import Advantages from "./../../components/Advantages";
import CourseList from "./../../components/CourseList";

function Home() {
  return (
    <div className="Home">
      <Poster />
      <Advantages />
      <CourseList />
    </div>
  );
}

export default Home;
