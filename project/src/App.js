import React from 'react';

import './App.css';

import NavBars from '../src/Basic/NavBars';
import Footer from '../src/Basic/Footer';
import {Switch, Route} from 'react-router-dom'; 
import Registration from '../src/Access/Registration';
import Login from '../src/Access/Login';
import {BrowserRouter as Router} from  'react-router-dom';


function App() {
  return (
    <Router>
    <div >
     <NavBars></NavBars>
   
       <Route exact path="/registration" component={Registration}/>
       <Route exact path="/login" component={Login}/>
 
     <Footer></Footer>

 
    </div>
    </Router>
  );
}

export default App;
