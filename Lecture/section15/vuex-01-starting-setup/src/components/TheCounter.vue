<template>    
    <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
  /*  counter(){
      //return this.$store.state.counter; // $store points to the vuex store
      return this.$store.getters.finalCounter;
    }
    Another & better way: */
    ...mapGetters('counterNamespace', ['finalCounter'])
  }
};
</script>