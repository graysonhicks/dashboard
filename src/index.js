import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import WhoopsComponent from './components/Whoops/Whoops'
import './index.css';

ReactDOM.render(
  <Router>
<div>
    <Route exact path="/" component={App}></Route>
    <Route path="*" component={WhoopsComponent}></Route>
</div>



  </Router>,
  document.getElementById('root')
);
