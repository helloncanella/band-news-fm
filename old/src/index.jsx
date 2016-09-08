import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BandNews from './components/band-news/band-news';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



const App = () => (
  <MuiThemeProvider>
    <BandNews/>
  </MuiThemeProvider>
);

render(<App/>, document.querySelector("#app"));
