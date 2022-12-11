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
      '--mb-bg-color': isDark ? darken(color, 90) : color.tint(90).toHexString(),
      '--mb-text-color': buttonColor,
      '--mb-border-color': isDark ? darken(color, 50) : color.tint(50).toHexString(),
      '--mb-hover-text-color': textColor,
      '--mb-hover-bg-color': buttonColor,
      '--mb-hover-border-color': buttonColor,
      '--mb-active-bg-color': activeBgColor,
      '--mb-active-text-color': textColor,
      '--mb-active-border-color': activeBgColor,
      '--mb-disabled-bg-color': isDark ? darken(color, 90) : color.tint(90).toHexString(),
      '--mb-disabled-text-color': isDark ? darken(color, 50) : color.tint(50).toHexString(),
      '--mb-disabled-border-color': isDark ? darken(color, 80) : color.tint(80).toHexString(),
    }
  } else {
    return {
      '--mb-bg-color': buttonColor,
      '--mb-text-color': textColor,
      '--mb-border-color': buttonColor,
      '--mb-hover-bg-color': hoverBgColor,
      '--mb-hover-text-color': textColor,
      '--mb-hover-border-color': hoverBgColor,
      '--mb-active-bg-color': activeBgColor,
      '--mb-active-text-color': textColor,
      '--mb-active-border-color': activeBgColor,
      '--mb-disabled-bg-color': disabledButtonColor,
      '--mb-disabled-text-color': textColor,
      '--mb-disabled-border-color': disabledButtonColor,
    }
  }
}
