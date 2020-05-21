import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'
import Header from './header'
import Home from './home'
import './App.css';
import Footer from './footer'
import About from './About/about'

function App() {
  return (
    <div style={{height:"100%"}}> 
      <Router>
      <div className="flexC"> 
        <div className="flexR" style={{flexShrink:1}}>
        <Header></Header>
        </div>
        <div className="flexR" style={{flex:1}}>
        <Route path='/home'/>
        <Home></Home>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
