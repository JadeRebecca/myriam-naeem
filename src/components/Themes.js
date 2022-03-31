const basis = {
  breakpoint: {
    s: 480,
    m: 768,
    l: 992,
    xl: 1200,
  },
  borderRadius: 4,
  main: '#00a07f',
}
export const lightTheme = {
  ...basis,
  text: '#0a192f',
  background: '#fff',
  primary: '#80DFB8',
  secondary: '#00a07f',
  neutral: '#80DFB8',
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
