import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Globalstyle';
import { theme } from './components/Themes';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Home />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
