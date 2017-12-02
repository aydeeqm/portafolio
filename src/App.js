import React from 'react';
import './css/body.css';
import About from './About';
import Skills from './Skills';
import Works from './Project';
import Contact from './Contact';
import Home from './Home';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'redux-zero/react';

const App = ({mydata}) => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skill" component={Skills} />
        <Route path="/project" component={Works} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  )
}

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(App);
