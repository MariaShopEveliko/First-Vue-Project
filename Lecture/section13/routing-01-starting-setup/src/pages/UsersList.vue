<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="savedChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams'); // Go to Teams page
    },
    savedChanges(){
      this.changesSaved = true;
    }
  },

  // you can add created / mounted / etc.
  beforeRouteEnter(to, from, next) {
    console.log('\n *** \n Users List component - beforeEnter');
    console.log({ 'to page': to, 'from page': from });
    next();
  },

  beforeRouteLeave(to, from, next){ // called before each & enter
    console.log('\n *** \n Users List component - beforeRouteLeave');
    console.log({ 'to page': to, 'from page': from });
    if (this.changesSaved){
      next();
    } else {
      const userWantsToLeave = window.confirm("Are you sure? You got unsaved changes"); //
      next(userWantsToLeave); // will got true / false (and user will stay on this case)
    }
  },

  //executes whenever user leaves the page
  unmounted(){
    console.log("Unmounted user list");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>