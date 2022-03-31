import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyles } from './components/Globalstyle'
import { lightTheme, darkTheme } from './components/Themes'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <Home theme={theme} themeToggler={themeToggler} />
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
