import { showImagePreview } from 'vant'

function install(app, option) {
  app.directive('showPrview', showPrview)
}

const timeLimit = 1000 // ms
const posLimit = 20 // px

const showPrview = {
  mounted(el, binding) {
    el.addEventListener('touchstart', handleTouchStart, false)
    el.addEventListener('click', show, false)

    function handleTouchStart(start) {
      // 判断是否是点击
      el.addEventListener('touchend', handleTouchEnd, false)

      function handleTouchEnd(end) {
        el.removeEventListener('touchend', handleTouchEnd)

        // 检测时间
        const startTime = start.timeStamp
        const endTime = end.timeStamp
        if (endTime - startTime > timeLimit) return

        // 检测距离
        const startX = start.changedTouches[0].clientX
        const startY = start.changedTouches[0].clientY
        const endX = end.changedTouches[0].clientX
        const endY = end.changedTouches[0].clientY
        if (Math.abs(endX - startX) > posLimit || Math.abs(endY - startY) > posLimit) return

        // 显示画面
        show()
      }
    }

    function show() {
      const { images, index } = binding.value
      if (!images || images.length == 0) return
      console.log(images, index)
      showImagePreview({
        images,
        startPosition: index,
      })
    }
  },
}

export default { install }
