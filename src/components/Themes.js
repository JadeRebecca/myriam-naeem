const basis = {
  breakpoint: {
    s: 480,
    m: 768,
    l: 992,
    xl: 1200,
  },
  borderRadius: 4,
}
export const lightTheme = {
  ...basis,
  white: '#ffffff',
  primary: '#141526',
  secondary: '#1CBFFF',
  neutral: '#E5E5E5',
  ternary : '#232443',
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
