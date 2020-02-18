import React from 'react';
import {Route, Switch} from 'react-router-dom';

import "./App.css";

import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import FrontPage from './container/FrontPage/FrontPage'; 
import ActiveComponent from './component/ActiveComponent/ActiveComponent';

const App =  () =>{
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/" component = {FrontPage} />
        <Route exact path ="/:id" component = {ActiveComponent} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
