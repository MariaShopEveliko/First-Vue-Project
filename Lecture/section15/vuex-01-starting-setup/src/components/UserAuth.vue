<template>
  <button @click="logIn" v-if="!isAuth">Login</button>
  <button @click="logOut" v-else>Logout</button>
</template>

<script>
//import { mapActions, mapGetters } from 'vuex';
export default {
//   computed: {
//     auth() {
//       return this.$store.state.loggedIn;
//     },
//   },
  methods: {
    //...mapGetters(['isAuthenticated']),
    logIn(){
        this.$store.dispatch('login');
    },
    logOut(){
        this.$store.dispatch('logout');
        }
  },
  computed:{
      isAuth(){
          return this.$store.getters.isAuthenticated;
      }
  }
};
</script>