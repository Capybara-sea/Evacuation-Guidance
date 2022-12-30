// import domtoimage from 'dom-to-image-more'
import html2canvas from 'html2canvas'

export default async function toImg(el, opt) {
  const { offsetWidth, offsetHeight } = el
  const { margin = 10, background = '#fff' } = opt
  const config = {
    scale: window.devicePixelRatio * 2,
    width: offsetWidth + margin * 2,
    height: offsetHeight + margin * 2,
    backgroundColor: background,
    x: -margin,
    y: -margin,
  }
  return html2canvas(el, config)
    .then((canvas) => canvas.toDataURL('image/png'))
    .catch((err) => err)
}
