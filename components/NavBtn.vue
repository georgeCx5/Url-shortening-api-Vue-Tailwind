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
   <button
      class=" text-white DT:text-neo-grayish-violet hover:text-neo-cyan DT:hover:text-neo-very-dark-blue text-[18px] DT:text-[15px] leading-[27px] DT:leading-[23px] font-bold">
      {{ btnText }}
   </button>
</template>