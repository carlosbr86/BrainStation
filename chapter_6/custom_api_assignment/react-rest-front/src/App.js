import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/todo"> ToDo Page </Link>
          <Link to="/about"> About Page </Link>
        </nav>
        {this.props.children} 
      </div>
    );
  };
};

export default App;
