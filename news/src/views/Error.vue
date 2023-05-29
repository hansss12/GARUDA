<template>
  <Navbar />
  <div class="flex justify-center p-10">
    <img src="../assets/404.jpg" alt="Error" class="rounded-3xl h-[40vh]">
  </div>
  <div class="flex justify-center p-10">
    <h1 class="text-black text-2xl text-semibold">Look like this news is out of services for now sorry for the problems</h1>
  </div>
  <div class="flex justify-center">
    <RouterLink to="/">
      <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i class='bx bx-log-out' ></i> BACK</button> 
    </RouterLink>
  </div>
  <Footerr />
</template>

<script>
import { RouterLink } from "vue-router";
import Footerr from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"

export default {
  components: {
    Navbar,
    Footerr,
  }
}
</script>