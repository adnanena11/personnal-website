import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// importation de bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'

const app = createApp(App)

app.use(router)

app.mount('#app')
