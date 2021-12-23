import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // npm install --save vue-router@next

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(), // to be able to go back
    routes: [ //urls
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList, footer: TeamsFooter
            },
            // component: TeamsList, 
            //alias: '/', - redirecr for home
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // dynamic & should be added as the last one: /teams/anyLinkOpensHere]
            ]
        },
        {
            path: '/users',
            // component: UsersList         
            components: {
                default: UsersList, footer: UsersFooter
            },
        },
        { path: '/:notFound(.*)', component: NotFound } // any page
    ],
    /* you can change the default classes: 
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" */
    scrollBehavior(to, from, savedPosition) { // will be called on page change
        console.log("Scroll Behavior:");
        console.log({
            "to": to,
            "from": from,
            "savedPosition": savedPosition // show position on page on go back/forward
        });
        if (savedPosition) {
            return savedPosition; // on back/forward scroll to the place where you was
        }
        else {
            return {
                left: 0, top: 0 // scroll to top left on page change
            };
        }
    }
});
const app = createApp(App);

app.use(router);
app.mount('#app');