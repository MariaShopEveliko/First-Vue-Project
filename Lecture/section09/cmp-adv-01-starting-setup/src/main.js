import { createApp } from 'vue';

import App from './App.vue';

/* Global components: they are available globally in the entire app. 
Vue downloads them on page load which will be a problem for big applications */
import BaseBadge from './components/UI/BaseBadge';
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

app.component('base-badge', BaseBadge); //global component
app.component('base-card', BaseCard); //global component
app.mount('#app');
