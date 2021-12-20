const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      lastNameInfo: ""
    };
  },
  computed:{
    fullName() {
      if (this.name === ""){
        return "";
      }
      else{
        return this.name + " Doe";
      }
    },
  },
  watch:{
    /* Just an example for data:
    lastName(value){ // this will be called everytime property last name (from data) was changed
      if(value === ""){
        this.lastNameInfo = "";
      } else{
        this.lastNameInfo = "your last name is " + value
      } 
    } 
    It's more useful whith stuff like counters, timers, http request: */
    counter(value) {
      if (value > 30) {
        const that = this;
        setTimeout(function(){
          that.counter = 0; //we're using constant cause this inside of timer won't be the same as outside the scope 
        }, 2000); //2 sec
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = "";
    }
  }
});

app.mount('#events');
