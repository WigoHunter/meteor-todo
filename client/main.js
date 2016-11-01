import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from '../import/routes.js';

import '../import/accounts-config.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
