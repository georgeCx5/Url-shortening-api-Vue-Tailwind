<script>
import iconBrandR from '@/assets/images/icon-brand-recognition.svg?url';
import iconDetailedR from '@/assets/images/icon-detailed-records.svg?url';
import iconFullyC from '@/assets/images/icon-fully-customizable.svg?url';

export default {
   data() {
      return {
         data: [
            {
               icon: iconBrandR,
               header: 'Brand Recognition',
               main: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
            },
            {
               icon: iconDetailedR,
               header: 'Detailed Records',
               main: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
            },
            {
               icon: iconFullyC,
               header: 'Fully Customizable',
               main: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
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
   <div class=" flex flex-col items-center DT:items-start w-full bg-white rounded-[5px]">
      <div
         class=" relative top-[-44px] DT:left-8 flex justify-center items-center w-[88px] h-[88px] bg-neo-dark-violet rounded-full">
         <img class=" select-none" :src="data[dataIndex].icon" :alt="`Image ${dataIndex + 1}`" draggable="false">
      </div>
      <div class=" flex flex-col gap-4 -mt-4 mb-8 px-8 text-center DT:text-left">
         <h3 class=" text-[22px] leading-[33px] font-bold">
            {{ data[dataIndex].header }}</h3>
         <p class=" text-neo-grayish-violet text-[15px] leading-[26px] font-medium">
            {{ data[dataIndex].main }}
         </p>
      </div>
   </div>
</template>