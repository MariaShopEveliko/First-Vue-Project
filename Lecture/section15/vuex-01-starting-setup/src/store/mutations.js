export default { // not allowed to run async code
    setAuth(state, payload) {
        state.loggedIn = payload.isAuth;
    }
};