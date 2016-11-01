import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import AccountsUIWrapper from './Account.js';

const App = ({ children }) => (
  <div>
    <div className="navi">
      <h3>Web Group</h3>
      <ul>
        <li><AccountsUIWrapper /></li>
        <Link to="/todo"><li>Todo</li></Link>
      </ul>
    </div>
    <div className="content">
      {children}
    </div>
  </div>
);

export default App;

export const About = () => (
  <h2>About</h2>
);
