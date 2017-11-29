import React from 'react';
import ReactDOM from 'react-dom';
import './css/body.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Works from './Project';
import Contact from './Contact';
import App from './App';
import {Provider} from 'redux-zero/react'
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom'


const Index = () => (
   <Provider store={store}>
      <HashRouter>
         <Switch>
            <Route  exact path = "/" component={App}/>
            <Route  path = "/home" component={App}/>
            <Route  path = "/about" component={About}/>
            <Route  path = "/skill" component={Skills}/>
            <Route  path = "/project" component={Works}/>
            <Route  path = "/contact" component={Contact}/>
        </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();