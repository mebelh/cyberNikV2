import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import Home from './pages/Home/Home'
import Zkt_info from './pages/courses/Zkt/Zkt_info/Zkt_info'
import Zkt_course from './pages/courses/Zkt/Zkt_course/Zkt_course'

import Films from './pages/Films/Films'

import { BrowserRouter, Switch, Route } from 'react-router-dom';



import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/zkt'} component={Zkt_course} />
          {/* <Route path={'/about'} component={About} /> */}
          {/* <Route path={'/lectures'} component={Lectures} /> */}
          {/* <Route path={'/library'} component={Libriary} /> */}
          <Route path={'/films'} component={Films} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
