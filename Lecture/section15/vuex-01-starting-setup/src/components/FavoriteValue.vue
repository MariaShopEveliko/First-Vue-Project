<template>
  <h3>{{ counter }}</h3>
  <p>Some additional data....</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['counterNamespace/normalizedCounter'];
    },
  },
};
</script>