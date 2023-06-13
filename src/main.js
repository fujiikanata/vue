import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import View from './view.vue'
import router from './index'
import { createPinia } from 'pinia';

const app = createApp(View)
app.use(createPinia)
app.use(router)

app.mount('#app')
