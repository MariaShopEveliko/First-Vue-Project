<template>
  <router-view v-slot="slotProps">
    <transition name="fade-btn" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  

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

.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}
.route-leave-active {
  animation: slide-fade 0.4s ease-in;
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