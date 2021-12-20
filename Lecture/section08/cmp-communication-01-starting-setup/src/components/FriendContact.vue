<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button> &nbsp;
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button> &nbsp;
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  /*props:[
    "name", "phoneNumber", "emailAddress", "isFavorite" //provide props that you expect to get
  ], */
  props: {
    // defines props
    id: {
      type: String,
      required: true,
    },
    // name: String, - this way you can provide prop and its type
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // default can be a function as well
      /* we don't need this validator because boolean always returns true / false
      validator: function(value){ // returns true or false
        return value === "1" || value === "0";
      } */
    },
  },
  emits:["toggle-favorite", "delete"], // defines custom events
  /* emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
  }, */
  data() {
    return {
      detailsAreVisible: false,
      /* Dummy data
        friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        }, */
      // friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id); //can be called inside the components and will be listened inside the parent component. Needs at least 1 argument (always use kebab case)
    },
    /* added to the template as it's a simple method
      deleteFriend(){
        this.$emit("delete", this.id); 
      }*/
  },
};
</script>