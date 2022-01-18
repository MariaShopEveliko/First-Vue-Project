export default {
    finalCounter(state) { // finalCounter(state, getters, rootState, rootGetters) - last ones gives an ability to access them from another modules
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
};