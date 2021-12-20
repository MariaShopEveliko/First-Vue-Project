/* First App */
const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    setTextOfNewInput(){
      this.message = this.$refs.secondInput.value; //points to the input (so we can access it now when we need it - not everytime on change)
    }
  },

  //lifecycle of creation
  beforeCreate(){ //before the creation
    console.log("beforeCreate()");
  }, 
  created(){ // app is created but nothing is visible on the creen
    console.log("created()");
  },
  beforeMount(){ // right before mount, still nothing is visible
    console.log("beforeMount()");
  },
  mounted(){ // mounted
    console.log("mounted()");
  },

  //data changes
  beforeUpdate(){
    console.log("beforeUpdate()");
  },
  updated(){
    console.log("updated()");
  },

  //unmount process
  beforeUnmount(){
    console.log("beforeUnmount()");
  },
  unmounted(){ // after killing/unmounting the app
    console.log("unmounted()");
  }
});

app.mount('#app');
setTimeout(() => {
  app.unmount(); // kill the app after 3sec
}, 3000);

/* Second App */
const app2 = Vue.createApp({
  template: `<p>{{ firstTemplate }}</p>`,
  data(){
    return{
      secondAppMsg: "It's my second app",
      firstTemplate: "My first template"
    };
  }
});
app2.mount("#app2");

/* Base JS */
console.log("%c \nBASE JS", "color: salmon; font-size: x-large;");
let baseMsg = "Base message";
console.log(baseMsg); // base msg won't be updated here
baseMsg = "Updated base message";

/* Building reactive JS */
console.log("%c \nREACTIVE JS", "color: salmon; font-size: x-large;");
const data = {
  msg: "Hello",
  longMsg: "Hello! World!"
};
const handler = {
  set(target, key,value){ // you receive it by default
    console.log("Showing handler: ", "\n",
        "target:", target, "\n", 
        "key:", key,"\n", 
        "value:", value);

        if(key === "msg"){
          target.longMsg = value + " World";
        }
        target.msg = value;
  }
};
const proxy = new Proxy(data, handler);
proxy.msg = "Hello!!!!";
console.log(proxy.msg);
console.log(proxy.longMsg);