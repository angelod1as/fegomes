const color = {
  dark: '#041F60',
  main: '#0476D0',
  light: '#2CEEF0',
  lighter: '#B4F5F0',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
}

const font = {
  family: {
    display: "'Fira Sans', sans-serif",
    text: "'Fira Sans', sans-serif",
  },
  weight: {
    regular: 300,
    medium: 600,
    bold: 900,
  },
}

const size = {
  larger: `(min-width: 1281px)`,
  large: `(min-width: 1025px)`,
  medium: `(min-width: 961px)`,
  small: `(min-width: 641px)`,
  smaller: `(min-width: 481px`,
  mini: `(min-width: 320px)`,
}

const numbers = {
  radius: '5px',
  menuHeight: 50,
  width: '700px',
  section: '1000px',
}

export interface ThemeProps {
  size: { [key in keyof typeof size]: string }
  color: { [key in keyof typeof color]: string }
  font: {
    family: {
      [key in keyof typeof font.family]: string
    }
    weight: {
      [key in keyof typeof font.weight]: number
    }
  }
  numbers: { [key in keyof typeof numbers]: string | number }
}

export const theme: ThemeProps = {
  size,
  color,
  font,
  numbers,
}

export default theme
