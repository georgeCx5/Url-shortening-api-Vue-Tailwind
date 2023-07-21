import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    urlValue: '',
    shortValue: null,
    isValidUrl: true,
    urlRgx: new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi),
    linksData: [
    ]
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
    async checkTextValue() {
      if (this.urlRgx.test(this.urlValue)) {
        this.isValidUrl = true
        await this.SetNewLink()
        this.linksData.push(
          {
            value: this.urlValue,
            shortenValue: this.shortValue,
            btnText: 'Copy'
          }
        )
        this.shortValue = '';
        this.urlValue = ''
      } else {
        this.isValidUrl = false
      }
    },
    async SetNewLink() {
      // await navigator.clipboard.writeText(this.urlValue.value);
      // let datos = await fetch('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html');
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${this.urlValue}`);
      response = await response.json();
      this.shortValue = response.result.full_short_link;
    },
    setNewState(i) {
      this.linksData[i].index = 'Copied!'
    }
  }
})
