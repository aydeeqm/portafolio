import React, { Component } from 'react';
import Header from './Header';
import {mydata} from './Data'
import Home from './Home'
import { connect } from 'redux-zero/react';

const App = ({mydata}) => {
  return(
    <div>
      <Header/>
      <Home mydata={mydata}/>
    </div>
  )
}

const mapToProps = ({ mydata }) => ({ mydata });
export default connect(mapToProps)(App);
