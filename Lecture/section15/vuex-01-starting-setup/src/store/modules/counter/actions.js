export default {
    increment(context) { //you can use the same name as on mutations
        setTimeout(function () {
            context.commit('increment'); // the name of the mutation
        });
    },
    increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
    }
};