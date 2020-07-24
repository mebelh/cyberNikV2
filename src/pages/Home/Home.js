import React from 'react'
import Poster from './../../Poster/Poster'
import Advantages from './../../Advantages/Advantages'
import CourseList from './../../CourseList/CourseList'



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
