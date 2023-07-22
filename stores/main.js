import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    urlValue: null,
    shortValue: null,
    isValidUrl: true,
    urlRgx: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    linksData: [
    ],
    prueba: 'apagada',
  }),
  getters: {
    getPlaceholderColor() {
      return this.isValidUrl ? 'placeholder:text-neo-very-dark-blue' : 'placeholder:text-neo-red border-[3px]'
    },
    getReversedLinks() {
      return this.linksData.slice().reverse()
    }
  },
  actions: {
    checkInputLength() {
      if (this.urlValue.length <= 0) {
        this.isValidUrl = false
      }
    },
    async checkTextValue() {
      const newRgx = new RegExp(this.urlRgx)
      if (newRgx.test(this.urlValue)) {
        await this.SetNewLink()
        this.linksData.push(
          {
            value: this.urlValue,
            shortenValue: this.shortValue,
            btnText: 'Copy'
          }
        )
        this.isValidUrl = true
        this.shortValue = null
        this.urlValue = null
      } else {
        this.isValidUrl = false
      }
    },
    async SetNewLink() {
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${this.urlValue}`);
      response = await response.json();
      this.shortValue = response.result.full_short_link;
    },
    async setCopyText(i) {
      let newArr = this.linksData.slice().reverse()
      await navigator.clipboard.writeText(newArr[i].shortenValue)
    },
    checkBtnText(text) {
      return text == 'Copy' ? 'bg-neo-cyan hover:bg-other-one' : 'bg-neo-dark-violet'
    }
  }
})
