<template>
  <div>
    <!-- option1: <the-header></the-header> -->
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">Active Goals</button
    >&nbsp;
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- Old way 
    <ActiveGoals v-if="selectedComponents === 'active-goals'"/>
    <ManageGoals v-if="selectedComponents === 'manage-goals'"/> 
    Dynamic components: 
    - component 
    - keep-alive - tells browser to cache the component & keep it's content    -->
    <keep-alive>
      <component :is="selectedComponents"
        ><!--Show the component that is selected--></component
      >
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // Local component: components will be available only in this file
    //option1: "the-header": TheHeader // key: value
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponents: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponents = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>