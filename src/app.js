import { ref, reactive, computed, watch, createApp, onMounted } from 'vue/dist/vue.esm-bundler.js'
import main from './components/main.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(main)
  app.mount('#app')
})
