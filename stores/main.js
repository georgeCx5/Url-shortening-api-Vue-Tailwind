import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    urlValue: '',
    isValidUrl: true,
    urlRgx: new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
  }),
  getters: {
    getPlaceholderColor() {
      return this.isValidUrl ? 'placeholder:text-neo-very-dark-blue' : 'placeholder:text-neo-red border-[3px]'
    }
  },
  actions: {
    checkInputLength() {
      if (this.urlValue.length <= 0) {
        this.isValidUrl = false
      }
    },
    checkTextValue() {
      if (this.urlRgx.test(this.urlValue)) {
        this.isValidUrl = true
        this.urlValue = ''
      } else {
        this.isValidUrl = false
      }
    }
  }
})
