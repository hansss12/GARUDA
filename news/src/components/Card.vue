<template>
  <div class="bg-white">
    <div class="sm:px-6 sm:py-10">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ type }}</h1>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative" v-for="(data, i) in news" :key="i" >
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="data.thumb" alt="Image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-start">
            <RouterLink :to="`/detail/${data.key}`" class="hover:bg-white">
              <h1 class="text-black text-xl font-semibold hover:text-[#e7373b]">
                {{ data.title }}
              </h1>
            </RouterLink>
          </div>
          <div>
            <h1 class="text-black text-m font-light mt-10">{{ data.desc }}</h1>
          </div>
          <div class="flex">
            <h1 class="text-[#e7373b] font-semibold text-xl mt-10 pr-2">{{ type }} </h1>
            <h1 class="text-black font-semibold text-l mt-11"> • {{ data.time }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ["news", "type"],
    components: { RouterLink }
}
</script>