import React from 'react';
import {Route, Switch} from 'react-router-dom';

import "./App.css";

import Navbar from './component/Navbar/Navbar';
import FrontPage from './container/FrontPage/FrontPage'; 
import ActiveComponent from './component/ActiveComponent/ActiveComponent';

import Hero from "./component/Hero/Hero"
import Form from "./component/Form/Form";

const App =  () =>{
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Form />
      <Switch>
        <Route exact path ="/" component = {FrontPage} />
        <Route exact path ="/:id" component = {ActiveComponent} />
      </Switch>
    </div>
  )
}

export default App;
