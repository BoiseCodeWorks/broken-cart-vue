import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import { registerFilters } from './utils/$Filters.js'

const root = createApp(App)
registerGlobalComponents(root)
registerFilters(root)

root
  .use(router)
  .mount('#app')
