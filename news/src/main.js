import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import CKEditor from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './CKEditor-reset.css'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(CKEditor)
app.mount('#app')
