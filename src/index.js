import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, hashHistory } from 'react-router-dom';
import App from './App';
import WhoopsComponent from './components/Whoops/Whoops'
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <div>
        <Route exact path="/" component={App}></Route>
        <Route path="/user" component={App}></Route>
        <Route path="*" component={WhoopsComponent}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
