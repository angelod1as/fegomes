const color = {
  color: '#333333',
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
  size: {
    regular: 300,
    medium: 600,
    bold: 900,
  },
}

const size = {
  largest: `(max-width: 1400px)`,
  large: `(max-width: 1100px)`,
  medium: `(max-width: 800px)`,
  small: `(max-width: 600px)`,
}

const numbers = {
  radius: 0,
}

export interface ThemeProps {
  size: { [key in keyof typeof size]: string }
  color: { [key in keyof typeof color]: string }
  font: {
    family: {
      [key in keyof typeof font.family]: string
    }
    size: {
      [key in keyof typeof font.size]: number
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
