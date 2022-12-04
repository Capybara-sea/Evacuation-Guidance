import { TinyColor } from '@ctrl/tinycolor'

function darken(color, amount = 20) {
  return color.mix('#141414', amount).toHexString()
}

export function btnColor(buttonColor, plain = false, isDark = false) {
  buttonColor ||= '#409EFF'
  const color = new TinyColor(buttonColor)
  const hoverBgColor = isDark ? darken(color, 30) : color.tint(30).toHexString()
  const activeBgColor = isDark ? color.tint(20).toHexString() : darken(color, 10)
  const disabledButtonColor = isDark ? darken(color, 50) : color.tint(50).toHexString()
  const textColor = isDark ? '#121212' : '#fafafa'

  if (plain) {
    return {
      '--my-button-bg-color': isDark ? darken(color, 90) : color.tint(90).toHexString(),
      '--my-button-text-color': buttonColor,
      '--my-button-border-color': isDark ? darken(color, 50) : color.tint(50).toHexString(),
      '--my-button-hover-text-color': textColor,
      '--my-button-hover-bg-color': buttonColor,
      '--my-button-hover-border-color': buttonColor,
      '--my-button-active-bg-color': activeBgColor,
      '--my-button-active-text-color': textColor,
      '--my-button-active-border-color': activeBgColor,
      '--my-button-disabled-bg-color': isDark ? darken(color, 90) : color.tint(90).toHexString(),
      '--my-button-disabled-text-color': isDark ? darken(color, 50) : color.tint(50).toHexString(),
      '--my-button-disabled-border-color': isDark ? darken(color, 80) : color.tint(80).toHexString(),
    }
  } else {
    return {
      '--my-button-bg-color': buttonColor,
      '--my-button-text-color': textColor,
      '--my-button-border-color': buttonColor,
      '--my-button-hover-bg-color': hoverBgColor,
      '--my-button-hover-text-color': textColor,
      '--my-button-hover-border-color': hoverBgColor,
      '--my-button-active-bg-color': activeBgColor,
      '--my-button-active-text-color': textColor,
      '--my-button-active-border-color': activeBgColor,
      '--my-button-disabled-bg-color': disabledButtonColor,
      '--my-button-disabled-text-color': textColor,
      '--my-button-disabled-border-color': disabledButtonColor,
    }
  }
}
