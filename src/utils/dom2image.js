// import domtoimage from 'dom-to-image-more'
import html2canvas from 'html2canvas'

export default async function toImg(el, margin = 10) {
  const { offsetWidth, offsetHeight } = el
  const opt = {
    scale: window.devicePixelRatio * 2,
    width: offsetWidth + margin * 2,
    height: offsetHeight + margin * 2,
    x: -margin,
    y: -margin,
  }
  return html2canvas(el, opt)
    .then((canvas) => canvas.toDataURL('image/png'))
    .catch((err) => err)
}
