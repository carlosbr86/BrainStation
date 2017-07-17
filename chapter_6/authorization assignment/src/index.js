import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App,Register,Login,PrivatePage} from './App';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/private" component={PrivatePage} />
        </Route>
    </Router>,
  document.getElementById('root')
);
