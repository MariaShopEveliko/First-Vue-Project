<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 11 })">Add 22</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    /*addOne(){
           this.$store.commit('increment');
       }*/
    //...mapActions(['increment', 'increase'])
    ...mapActions({ // can be used for mapGetters as well
        inc: 'increment',
        increase: 'increase'
    })
  },
};
</script>