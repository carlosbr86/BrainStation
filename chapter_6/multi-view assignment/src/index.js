// Create a React app using create-react-app

// OK     Install react router with npm install react-router --save
// OK     Set up your application with 2 routes in react-router; one for the main app view and one for an about page view
// OK     The about page will be a page with static text content
// OK     Make it so that the main app view will fire up the todo app from last chapter
// OK     As your application is growing significantly in size, split up your todo app component 
//            in smaller components if it already wasn't
// OK     Make use of nested routes to display a header for the entire app that will stay the same regardless
//           of which route is currently displayed

// Make it so that the state of todo app persists even when you navigate to the about page and then back to the todo app page
// Hints:

//0K      The todo app component could be split into the following subcomponents; 
//        TodoContainer (to contain all), Todos, Todo and Form.(This is just one possibility, you can structure it any way you want)

// Use localStorage to store the state (or parts of the state) object
// You would need to use some React component lifecycle methods while working with localStorage


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  
import './index.css';

import About from './About';
import AppToDo from './TODO/AppToDo'

import {Router, Route,browserHistory,IndexRoute} from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AppToDo} />
      <Route path="todo" component={AppToDo}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
