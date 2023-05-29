import SvgIcon from '@/components/SvgIcon/index.vue'

export const useIconRender = () => {
  interface IconConfig {
    icon?: string
    localIcon?: string
    color?: string
    fontSize?: number
  }

  interface IconStyle {
    color?: string
    fontSize?: string
  }

  const iconRender = (config: IconConfig) => {
    const style: IconStyle = {}
    const { icon, localIcon, color, fontSize = 20 } = config

    if (color) {
      style.color = color
    }

    if (fontSize) {
      style.fontSize = `${fontSize}px`
    }

    if (!icon && !localIcon) {
      window.console.warn(
        '没有传递图标名称, 请确保传递icon或localIcon传递有效值!'
      )
    }

    return () => h(SvgIcon, { icon, localIcon, style })
  }

  return {
    iconRender
  }
}
