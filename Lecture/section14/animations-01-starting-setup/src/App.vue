<template>
<router-view></router-view>
</template>  

<script>
export default {
  components: {
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}
/* 
.v-enter-from,.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to,.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
} */

.paragraph-enter-active {
  animation: slide-fade 2s ease-out;
}
.paragraph-leave-active {
  animation: slide-fade 0.3s ease-in;
}

.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}
.fade-btn-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-btn-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-btn-enter-to,
.fade-btn-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>