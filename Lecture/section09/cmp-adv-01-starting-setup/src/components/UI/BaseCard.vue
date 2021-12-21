<template>
  <div>
    <header v-if="$slots.header"><!--don't render if it's undefined = not used-->
      <slot name="header"> </slot>
    </header>
    <slot>
      <!--Unnamed slot is a default-->
      <h2>The default</h2>
      <!--The fallback. Will be visible if header slot is not used-->
    </slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots); //contains an information about the slots data
    console.log(this.$slots.header); //wll return undefined if there is a place where header is empty
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>