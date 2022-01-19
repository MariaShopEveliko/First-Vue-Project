import { createApp } from 'vue';

import router from './router.js';
import store from './pages/store/index.js';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');