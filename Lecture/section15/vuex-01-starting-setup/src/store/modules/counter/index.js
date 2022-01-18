import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
    namespaced: true, //now the entire module is detached so you wont have naming issues with other modules
    state() { //local to the counterModule module so can't be acessed from other modules 
        return {
            counter: 0
        };
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};