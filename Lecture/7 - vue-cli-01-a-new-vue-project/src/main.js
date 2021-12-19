import { createApp } from 'vue'; //importing from package.json

import App from "./App.vue"; // App is any name that will made a connection with default object
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);
app.component("friend-contact", FriendContact);
app.mount('#app');