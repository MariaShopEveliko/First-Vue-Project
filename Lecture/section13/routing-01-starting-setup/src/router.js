import { createRouter, createWebHistory } from 'vue-router'; // npm install --save vue-router@next

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';


const router = createRouter({
    history: createWebHistory(), // to be able to go back
    routes: [ //urls
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { // can be acessed on all of the places
                needsAuth: true
            },
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
            beforeEnter(to, from, next){ //same as before each but for 1 route
                console.log("\n *** \n Users beforeEnter");
                console.log({"to page": to, "from page": from});
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound } // any page
    ],
    /* you can change the default classes: 
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" */

    //scrollBehavior(_, _2, savedPosition) { // take first 2 arguments in order to get to the last onr & don't use them after that
    scrollBehavior(to, from, savedPosition) { // will be called on page change
        console.log("\n *** \n Scroll Behavior:");
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
// global - first, route - second, component - last

router.beforeEach(function(to, from, next){ //called before each navigation action
    console.log("\n *** \n  Before Each");
    console.log({"to page": to, "from page": from});

    if (to.meta.needsAuth){
        console.log("Needs auth!");
        next();
    } else {
        next();
    }

    next(); // to allow or cancel navigation, for example, if user is not authenticated
    //next(false); // cancel the navigation
    //name('/users'); // string to an existing router
    
    /*if (to.name === 'team-member') {
        next(); 
    }
    else{
        next({name: 'team-member', params: {teamId: 't2'}}); // redirect to team members
    }*/
});

router.afterEach(function(to, from){ //don't have next cause it'll be run once the navigation is confirmed. Usefull for sending analytics data
    console.log("\n *** \n  After Each");
    console.log({"to page": to, "from page": from});

});

export default router; // so it can be imported to another file