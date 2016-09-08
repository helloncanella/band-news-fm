import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

const store = configureStore();


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
