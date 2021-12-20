<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone"/>
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail"/>
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>
<!-- We don't need props because this app don't have any external data-->

<script>
    export default {
        emits: ["add-contact"],
        data() { // define data that is required by this component
            return {
                enteredName: "",
                enteredPhone: "",
                enteredEmail: ""
            }
        },
        methods: {
            submitData(){ // emit "add-contact" event so we can forward it to App.vue
                this.$emit("add-contact", this.enteredName, this.enteredPhone, this.enteredEmail);
            }
        }
    };
</script>
