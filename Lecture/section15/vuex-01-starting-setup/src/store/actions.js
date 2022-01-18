export default { // good practice is to use actions & they're usefull for the async code
    //DON'T change state from actions
    login(context) {
        context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
        context.commit('setAuth', { isAuth: false });
    }
};