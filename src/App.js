import React from 'react';
import logo from './logo.svg';
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
    <div style={{height:'100%'}}>
      <Router>
        <Header class="c1"/>
        <Switch>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
