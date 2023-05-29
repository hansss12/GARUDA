<template>
  <Navbar />
  <div class="flex justify-center mt-10">
    <pre class="text-2xl text-black font-bold">{{ newsDetail.title }}</pre>
  </div>
  <div class="flex justify-center p-10">
    <img :src="newsDetail.thumb" alt="iPhone" class="rounded-3xl">
  </div>
  <div class="mt-2" v-for="(data, i) in  newsDetail.content" :key="i">
    <h1 class="text-black text-l font-medium">{{ data }}</h1>
  </div>
  <div class="flex justify-center mt-10">
  <RouterLink to="/">
    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i class='bx bx-log-out' ></i> BACK</button> 
  </RouterLink>
</div>
<ckeditor :editor="editor" v-model="editorData" :config="editorConfig" ></ckeditor>
  <Footerr />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useNewsStore } from "../stores/counter"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Footerr from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
          // The configuration of the editor.
      }
    }
  },
  components: {
    Navbar,
    Footerr,
  },
  computed: {
    ...mapState(useNewsStore, ["newsDetail"])
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchNewsByUrl'])
  },
  async created() {
    await this.fetchNewsByUrl(this.$route.params.url)
  }
}
</script>