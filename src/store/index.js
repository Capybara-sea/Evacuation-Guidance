import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    darkMode: false,
    result: {},
    currentRouteName: '',
  }),
  actions: {
    resetResult() {
      this.result = {}
    },
  },
})
