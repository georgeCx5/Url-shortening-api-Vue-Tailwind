<script>
import { useMainStore } from '@/stores/main'
import { mapStores } from 'pinia'

import NavBtn from './components/NavBtn.vue';
import Features from './components/Features.vue';
import FooterLogo from './components/FooterLogo.vue';
import FooterText from './components/FooterText.vue';
import FooterNetworks from './components/FooterNetworks.vue';

import logo from '@/assets/images/logo.svg?url'
import iconHamburger from '@/assets/images/icon-hamburger.svg?url'

export default {
  data() {
    return {
      logo,
      iconHamburger,
      illustration: 'bg-[url(@/assets/images/illustration-working.svg?url)]',
      isNavOpen: false,
      bgShortenMB: 'bg-[url(@/assets/images/bg-shorten-mobile.svg?url)]',
      bgShortenDT: 'DT:bg-[url(@/assets/images/bg-shorten-desktop.svg?url)]',
      bgBoostMB: 'bg-[url(@/assets/images/bg-boost-mobile.svg?url)]',
      bgBoostDT: 'DT:bg-[url(@/assets/images/bg-boost-desktop.svg?url)]',
    }
  },
  components: {
    NavBtn,
    Features,
    FooterLogo,
    FooterText,
    FooterNetworks,
  },
  computed: {
    ...mapStores(useMainStore),
  }
}
</script>
<template>
  <body class=" flex flex-col items-center text-neo-very-dark-blue font-poppins">
    <header class=" relative w-full max-w-[425px] pt-10 pb-[168px] overflow-hidden">
      <nav class=" flex justify-between items-center mb-6 mx-6 select-none">
        <img :src="logo" alt="logo" draggable="false">
        <div @click="isNavOpen = !isNavOpen" class=" cursor-pointer">
          <img class=" w-6" :src="iconHamburger" alt="iconHamburger">
        </div>
        <div v-show="isNavOpen" class=" absolute top-24 left-0 flex flex-col items-center w-full bg-transparent">
          <div class=" flex flex-col items-center gap-8 w-[87.2%] py-10 bg-neo-dark-violet rounded-[10px]">
            <NavBtn btn-text="Features" />
            <NavBtn btn-text="Pricing" />
            <NavBtn btn-text="Resources" />
            <div class=" w-[85.3%] h-[1px] bg-neo-grayish-violet"></div>
            <div class=" flex flex-col items-center gap-6">
              <NavBtn btn-text="Login" />
              <button
                class=" w-[279px] h-[48px] bg-neo-cyan hover:bg-other-one text-white text-[18px] leading-[27px] font-bold rounded-[28px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class=" flex flex-col gap-9">
        <div :class="`${illustration} w-[511px] h-[337px] ml-6 bg-cover`"></div>
        <div class=" flex flex-col items-center gap-8 px-6">
          <div class=" flex flex-col text-center gap-4">
            <h1 class=" text-[42px] leading-[48px] tracking-[-1.05px] font-bold">
              More than just shorter links</h1>
            <p class=" text-neo-grayish-violet text-[18px] leading-[30px] tracking-[.12px] font-medium">
              Build your brand’s recognition and get detailed insights
              on how your links are performing.
            </p>
          </div>
          <button
            class=" w-[197px] h-[56px] bg-neo-cyan hover:bg-other-one text-white text-[20px] leading-[30px] font-bold rounded-[28px] select-none">
            Get Started
          </button>
        </div>
      </div>
    </header>
    <main class=" w-full max-w-[425px] DT:max-w-[1920px] bg-other-two">
      <section
        class=" relative top-[-80px] flex flex-col items-center gap-4 mx-6 -mb-12 p-6 bg-neo-dark-violet rounded-[10px]"
        :class="`${bgBoostMB} ${bgBoostDT} bg-no-repeat`">
        <div class=" flex flex-col items-start gap-1 w-full">
          <input
            :class="` w-full h-[48px] px-4 ${mainStore.getPlaceholderColor} placeholder:text-opacity-50 focus:outline-none border-neo-red rounded-[5px]`"
            type="url" placeholder="Shorten a link here..." v-model="mainStore.urlValue">
          <p v-show="!mainStore.isValidUrl"
            class=" text-neo-red text-[12px] leading-[18px] italic font-medium tracking-[.08px] ">
            Please add a link</p>
        </div>
        <button @click="mainStore.checkTextValue()"
          class=" w-full h-[48px] bg-neo-cyan hover:bg-other-one text-white text-[20px] leading-[30px] font-bold rounded-[5px] select-none">
          Shorten It!
        </button>
      </section>
      <section class=" flex flex-col gap-6 w-full mb-20 px-6">
        <div v-for="(item, index) in mainStore.getReversedLinks"
          class=" relative flex flex-col gap-3 bg-white pt-[6px] pb-[16px] px-4 text-[16px] leading-[36px] tracking-[.12px] font-medium rounded-[5px]">
          <p class=" w-full h-9 overflow-hidden">
            {{ item.value }}
          </p>
          <div class=" absolute left-0 top-12 w-full h-[1px] bg-neo-grayish-violet bg-opacity-25"></div>
          <a class=" text-neo-cyan" :href="item.shortenValue" target="_blank" rel="noopener noreferrer">
            {{ item.shortenValue }}</a>
          <button @click="mainStore.setCopyText(index), item.btnText = 'Copied!'"
            :class="` w-full h-10 ${mainStore.checkBtnText(item.btnText)} text-white text-[16px] leading-[24px] tracking-[0px] font-bold rounded-[5px]`">
            <span>{{ item.btnText }}</span>
          </button>
        </div>
      </section>
      <section class=" w-full mb-20 px-6">
        <div class=" flex flex-col gap-4 mb-[90px] text-center">
          <h2 class=" text-[28px] leading-[48px] tracking-[-.7px] font-bold">
            Advanced Statistics</h2>
          <p class=" text-neo-grayish-violet text-[16px] leading-[28px] tracking-[.11px] font-medium">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>
        </div>
        <div class=" relative flex flex-col gap-[92px] z-0">
          <Features :data-index="0" />
          <Features :data-index="1" />
          <Features :data-index="2" />
          <div class=" absolute flex self-center w-2 h-full bg-neo-cyan -z-10"></div>
        </div>
      </section>
      <section class=" flex flex-col items-center gap-4 w-full py-[90px] bg-neo-dark-violet text-white font-bold"
        :class="`${bgBoostMB} ${bgBoostDT} bg-no-repeat bg-right`">
        <h2 class=" text-[28px] leading-[48px] tracking-[-.7px]">
          Boost your links today</h2>
        <button
          class=" w-[197px] h-[56px] bg-neo-cyan hover:bg-other-one text-[20px] leading-[30px] rounded-[28px] select-none">
          Get Started
        </button>
      </section>
    </main>
    <footer class=" flex flex-col gap-12 w-full max-w-[425px] py-14 bg-neo-very-dark-violet">
      <FooterLogo class=" self-center" />
      <div class=" flex flex-col items-center text-center gap-10">
        <FooterText :data-index="0" />
        <FooterText :data-index="1" />
        <FooterText :data-index="2" />
      </div>
      <div class=" flex justify-center items-center gap-6">
        <FooterNetworks :data-index="0" />
        <FooterNetworks :data-index="1" />
        <FooterNetworks :data-index="2" />
        <FooterNetworks :data-index="3" />
      </div>
    </footer>
  </body>
</template>