import { createApp } from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import './styles/index.css';

createApp(App)
  .use(VueTippy)
  .mount('#app')
