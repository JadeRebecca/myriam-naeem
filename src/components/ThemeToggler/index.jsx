import React, { useState } from 'react'
import { func, string } from 'prop-types'
import { DarkModeToggle } from 'react-dark-mode-toggle-2'

const ThemeToggler = ({ theme, toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark' ? true : false)

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
    toggleTheme()
  }
  return (
    <DarkModeToggle
      onChange={onChangeTheme}
      isDarkMode={isDarkMode}
      size={60}
    />
  )
}
ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ThemeToggler
