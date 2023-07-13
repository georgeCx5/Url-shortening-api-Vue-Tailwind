<script>
import NavBtnVue from './components/NavBtn.vue';

import logo from '@/assets/images/logo.svg?url'
import iconHamburger from '@/assets/images/icon-hamburger.svg?url'
// import illustration from '@/assets/images/illustration-working.svg?url'

export default {
  data() {
    return {
      logo,
      iconHamburger,
      // illustration,
      illustration: 'bg-[url(@/assets/images/illustration-working.svg?url)]',
      isNavOpen: false,
    }
  },
  components: {
    NavBtnVue,
  }
}
</script>
<template>
  <body class=" flex flex-col items-center text-neo-very-dark-blue font-poppins">
    <header class=" relative w-full max-w-[425px] pt-10 overflow-hidden">
      <nav class=" flex justify-between items-center mb-6 mx-6 select-none">
        <img :src="logo" alt="logo" draggable="false">
        <div @click="isNavOpen = !isNavOpen" class=" cursor-pointer">
          <img class=" w-6" :src="iconHamburger" alt="iconHamburger">
        </div>
        <div v-show="isNavOpen" class=" absolute top-24 left-0 flex flex-col items-center w-full bg-transparent">
          <div class=" flex flex-col items-center gap-8 w-[87.2%] py-10 bg-neo-dark-violet rounded-[10px]">
            <NavBtnVue btn-text="Features" />
            <NavBtnVue btn-text="Pricing" />
            <NavBtnVue btn-text="Resources" />
            <div class=" w-[85.3%] h-[1px] bg-neo-grayish-violet"></div>
            <div class=" flex flex-col items-center gap-6">
              <NavBtnVue btn-text="Login" />
              <button
                class=" w-[279px] h-[48px] bg-neo-cyan hover:bg-other-one text-white text-[18px] leading-[27px] font-bold rounded-[28px]">Sign
                Up</button>
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
            class=" w-[197px] h-[56px] bg-neo-cyan hover:bg-other-one text-white text-[20px] leading-[30px] font-bold rounded-[28px]">
            Get Started
          </button>
        </div>
      </div>
    </header>
    <main class=" w-full max-w-[425px]">
    </main>
  </body>
</template>