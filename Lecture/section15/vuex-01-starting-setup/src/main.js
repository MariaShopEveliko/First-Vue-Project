import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: { // not allowed to run async code
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: { // good practice is to use actions & they're usefull for the async code
        //DON'T change state from actions
        increment(context) { //you can use the same name as on mutations
            setTimeout(function () {
                context.commit('increment'); // the name of the mutation
            });
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload);
        }
    },
    getters: {
        finalCounter(state) { // finalCounter(state, getters)
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            else if (finalCounter > 100) {
                return 100;
            }
            else {
                return finalCounter;
            }
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
