<template>
  <div>
    <h2>Manage golas</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!--teleport: Built-in vue component which allows to move content inside to specific place-->
    <teleport to="body"> 
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter at least few characters</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      this.inputIsInvalid = enteredValue === "" ? true : false;
      // alert("Input must not be empty");
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>