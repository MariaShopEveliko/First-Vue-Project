<template>
  <div class="container">
    <h2>Home</h2>
    <router-link to="/goals">Course goals</router-link>
    <router-link to="/users">All users</router-link>
  </div>
  <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: isBlockAnimated }">
      <!--add animate class-->
    </div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition name="paragraph">
      <!--Transition should have only 1 direct child.
      Class is added to the child, not to transition itlsef-->
      <p v-if="paraIsVisible">This is toggled by btn..</p>
    </transition>
    <!--:css="false" means that you will use only js for animation so vue wont look at css at all => improves performance-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCanceled"
      @leave-cancelled="leaveCanceled"
    >
      <p v-if="paraIsVisible">This is toggled by btn & animated with JS..</p>
    </transition>
    <transition
      enter-to-class="my-trans-to-class"
      enter-active-class="my-trans-active-class"
    >
      <p v-if="paraIsVisible">You can change the default classes</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraphs</button>
  </div>
  <div class="container">
    <transition name="fade-btn" mode="out-in">
      <!--transition can have multiple childs if we garantee that only 1 el-t will exist at DOM at a time;
      mode out-in (or in-out) tells which el-t to animate first-->
      <button @click="showInfo" v-if="!infoIsVisible">
        Show info - transition
      </button>
      <button @click="hideInfo" v-else>Hide info - transition</button>
    </transition>
  </div>

  <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UsersList from '../components/UsersList.vue';
export default {
  components: {
    UsersList,
  },
  data() {
    return {
      dialogIsVisible: false,
      isBlockAnimated: false,
      paraIsVisible: false,
      infoIsVisible: false,
      enterInterval: null,
      leaveInterval: null,
      currentOpacity: 0,
    };
  },
  methods: {
    animateBlock() {
      // this.isBlockAnimated = this.isBlockAnimated ? false: true;
      this.isBlockAnimated = !this.isBlockAnimated;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showInfo() {
      this.infoIsVisible = true;
    },
    hideInfo() {
      this.infoIsVisible = false;
    },
    beforeEnter(el) {
      //by default vue supports 1 argument - element
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        this.currentOpacity = round * 0.01;
        el.style.opacity = this.currentOpacity;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done(); // tell vue that you're ready
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = this.currentOpacity;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      /* 
      we're using arrow function because otherwise this inside wont reffer to the gloval this
      this.leaveInterval = setInterval(function () {
      */
      this.leaveInterval = setInterval(() => {
        el.style.opacity = this.currentOpacity - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
      el.style.opacity = 0;
    },
    enterCanceled(el) {
      console.log('enterCanceled');
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCanceled(el) {
      console.log('enterCanceled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },
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