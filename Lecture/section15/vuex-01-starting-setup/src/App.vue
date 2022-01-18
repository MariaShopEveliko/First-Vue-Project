<template>
  <base-container title="User Authentication">
    <user-auth></user-auth>
  </base-container>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase">Add 20</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    increase() {
      //this.$store.commit('increase', {value: 10});
      this.$store.dispatch({
        // dispatch - for actions, commit - for methods
        type: 'increase',
        value: 10,
      });
    },
  },
  computed:{
      isAuth(){
          return this.$store.getters.isAuthenticated;
      }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  padding: 5px 10px;
  background: white;
  border: 1px solid #ccc;
  margin-right: 10px;
  transition: 0.5s;
}

button:hover {
  background: #ccc;
  cursor: pointer;
}
</style>