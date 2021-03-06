import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import App from './templates/App/App';
import { GllobalStyles } from './styles/global-styles';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GllobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

