<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },
  methods: {
    increase(){
       //this.$store.commit('increase', {value: 10});
       this.$store.commit({
         type: 'increase',
         value: 10
       })
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
  transition: .5s;
}

button:hover{
  background: #ccc;
  cursor: pointer;
}
</style>