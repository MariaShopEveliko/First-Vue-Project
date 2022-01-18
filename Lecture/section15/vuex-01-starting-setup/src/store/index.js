import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

const store = createStore({
    modules: {
        counterNamespace: counterModule
    },
    state() { //local to the createStore module
        return {
            loggedIn: false
        };
    },
    mutations: rootMutations,
    actions:rootActions,
    getters: rootGetters
});

export default store;