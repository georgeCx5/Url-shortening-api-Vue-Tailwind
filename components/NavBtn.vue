<script>
export default {
   data() {
      return {

      }
   },
   props: {
      btnText: {
         String,
         default: 'Empty',
      }
   }
}
</script>
<template>
   <button class=" text-white hover:text-neo-cyan text-[18px] leading-[27px] font-bold">
      {{ btnText }}
   </button>
</template>