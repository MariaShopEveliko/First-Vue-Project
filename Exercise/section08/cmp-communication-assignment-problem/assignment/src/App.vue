<template>
  <section>
    <header>
      <h1>My Users</h1>
    </header>
    <main>
      <user-data @submit-user="addNewUser"></user-data>
      <ul>
        <active-user :name="user.name" :age="user.age"></active-user>
      </ul>
      <!--  Add new user functionality
        <active-user
          v-for="user in users"
          :key="user.name"
          :name="user.name"
          :age="user.age"
        ></active-user> -->
    </main>
  </section>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "Manuel",
        age: "25",
      },
      /* Add new user functionality
     users: [
        {
          id: "manuel",
          name: "Manuel",
          age: "25",
        },
      ], */
    };
  },
  methods: {
    addNewUser(name, age) {
      this.user = {
        name: name,
        age: age,
      };
      /*  Add new user functionality
      const newUserContact = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newUserContact); */
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
#app header {
  background-color: #58004d;
  color: white;
  text-align: center;
}
#app main {
  display: flex;
  justify-content: space-evenly;
}
#app main > * {
  flex: 1;
}
#app header,
#app main {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
}
#app li + li {
  margin-top: 0.5rem;
}
#app h2,
#app h3 {
  margin: 0;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 4rem;
  display: inline-block;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #58004d;
  background-color: #58004d;
  color: white;
  padding: 0.25rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  border: 1px solid #c0c0c0;
}
</style>