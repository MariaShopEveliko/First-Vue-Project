<template>
  <form @submit.prevent="submitUser">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Age:</label>
      <input type="number"  v-model="enteredAge"/>
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUser() {
      this.$emit("submit-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>