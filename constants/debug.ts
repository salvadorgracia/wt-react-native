const DEBUG = true

const border = (color: any) =>
  DEBUG ? { borderWidth: 1, borderColor: color } : {}

export const d = {
  red: border('red'),
  blue: border('blue'),
  green: border('green'),
  yellow: border('yellow'),
  purple: border('purple'),
  orange: border('orange'),
}
