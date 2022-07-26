import React from 'react';
import ReactDOM from 'react-dom';
import SettingsProvider from './Context/Settings';

import App from './app.js';

class Main extends React.Component {
  render() {
    return(
    <SettingsProvider>
      <App />
    </SettingsProvider>
  )}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
