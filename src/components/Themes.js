const basis = {
  breakpoint: {
    s: 480,
    m: 768,
    l: 992,
    xl: 1200,
  },
  borderRadius: 4,
  main: '#ffffff',
}
export const lightTheme = {
  ...basis,
  text: '#0a192f',
  background: '#fff',
  white: '#ffffff',
  primary: '#000D3F',
  secondary: '#4BE4F0',
  neutral: '#CCCCFE',
  ternary : '#4B4EF0',
  shadow: 'rgba(2,12,27,0.7)',
}
export const darkTheme = {
  ...basis,
  text: '#FAFAFA',
  background: '#0a192f',
  primary: '#00a07f',
  secondary: '#80DFB8',
  neutral: '#6F8C80',
  shadow: 'rgba(203,231,202,0.7)',
}
