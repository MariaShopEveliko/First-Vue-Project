import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // npm install --save vue-router@next

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
    history: createWebHistory(), // to be able to go back
    routes: [ //urls
        { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
        { path: '/users', component: UsersList }
    ]
});
const app = createApp(App);

app.use(router);
app.mount('#app');