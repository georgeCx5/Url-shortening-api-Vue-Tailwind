<script>
export default {
   data() {
      return {
         data: [
            {
               header: 'Features',
               links: [
                  'Link Shortening',
                  'Branded Links',
                  'Analytics'
               ]
            },
            {
               header: 'Resources',
               links: [
                  'Blog',
                  'Developers',
                  'Support'
               ]
            },
            {
               header: 'Company',
               links: [
                  'About',
                  'Our Team',
                  'Careers',
                  'Contact'
               ]
            },
         ]
      }
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   }
}
</script>
<template>
   <div class=" flex flex-col gap-[22px]">
      <h4 class=" text-white text-[16px] leading-[24px] tracking-[-.25px] font-bold">
         {{ data[dataIndex].header }}</h4>
      <div class=" flex flex-col gap-[10px] select-none">
         <a v-for="item in data[dataIndex].links"
            class=" text-neo-gray hover:text-neo-cyan text-[15px] leading-[23px] tracking-[-.23px] font-medium" href="#" target="_blank"
            rel="noopener noreferrer">
            {{ item }}</a>
      </div>
   </div>
</template>