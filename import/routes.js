import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App, { About } from './ui/App.js';
import TodoListContainer from './ui/Todos.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TodoListContainer} />
      <Route path="about" component={About} />
      <Route path="todo" component={TodoListContainer} />
    </Route>
  </Router>
);
