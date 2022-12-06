import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    result: {},
    currentRouteName: '',
  }),
  actions: {
    resetResult() {
      this.result = {}
    },
  },
})
