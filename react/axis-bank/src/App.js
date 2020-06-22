import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Login from './components/Login';
import Contact from './components/contact';


function App() {
  return (
    <div >
      <h1 className="App">AXIS BANKING APPLICATION</h1>
      <hr></hr>
      <Router>
    <div>
      
        <Link to="/">HOME</Link>&nbsp;&nbsp;
        <Link to="/About">ABOUT</Link>&nbsp;&nbsp;
        <Link to="/Services">SERVICES</Link>&nbsp;&nbsp;
        <Link to="/Login">LOGIN</Link>&nbsp;&nbsp;
        <Link to="/Contact">CONTACT </Link>&nbsp;&nbsp;

      

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Login" component={Login} />
      <Route path="/Contact" component={Contact} />

    </div>
  </Router>
    </div>
  );
}

export default App;
