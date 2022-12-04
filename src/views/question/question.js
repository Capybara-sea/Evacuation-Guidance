import { cloneDeep } from 'lodash'
import { useStore } from '@/store'
import script from '@/script'
const store = useStore()

export default class Question {
  static script = script //　台本
  route
  router
  cq // currQuestion現在の質問
  checked
  status // 結果

  constructor({ cq, route, router, checked }) {
    this.route = route
    this.router = router
    this.cq = cq
    this.checked = checked
  }

  // clickEvent
  next(item) {
    this.setStatus(item)
    if (item.to == 'end') {
      this.router.push('/result')
    } else if (item.to) {
      this.setCq(item.to)
    }
  }

  setStatus(item) {
    const type = this.cq.value.type
    if (type == 'grid') {
      this.saveChecked() // Save checked
    }
    if (type == 'check') {
      store.result[this.cq.value.id] = item.text
    }
  }

  saveChecked() {
    store.result[this.cq.value.id] = cloneDeep(this.checked.value)
  }

  loadChecked() {
    this.checked.value = store.result[this.cq.value.id]
  }

  isValidId(id) {
    return !!Question.script[id]
  }

  // Private utils
  setCq(id) {
    // Check if ids are equal, if not then change cq and router
    if (id == this.cq?.value?.id) return
    if (this.isValidId(id)) {
      this.cq.value = Question.script[id]
      this.router.push('/question/' + id)
    } else {
      this.cq.value = Question.script[Question.script.Default_ID]
      this.router.replace('/question/' + Question.script.Default_ID)
    }

    if (this.cq.value.type == 'grid') {
      // If there is data in status, take out
      this.loadChecked()
    }
    console.log('status', store.result)
  }
}
