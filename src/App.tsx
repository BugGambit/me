import React from 'react';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme, ThemeProvider as MuiThemeProvider, responsiveFontSizes, StylesProvider } from '@material-ui/core/styles';
import Projects from 'components/Projects/Projects';
import { ThemeProvider } from 'styled-components';

import AboutMe from './components/AboutMe/AboutMe';

const customTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      text: {
        secondary: '#f1faee',
      },
    },
  })
);

function App(): JSX.Element {
  return (
    <StylesProvider injectFirst>
      <NoSsr>
        <MuiThemeProvider theme={customTheme}>
          <CssBaseline />
          <ThemeProvider theme={customTheme}>
            <AboutMe />
            <Projects />
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </StylesProvider>
  );
}

export default App;
