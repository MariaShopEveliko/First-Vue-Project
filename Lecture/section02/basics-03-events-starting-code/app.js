const app = Vue.createApp({
  data() {
    return {
      counter: 12,
      name: "Maria",
      surname: "",
      names: "",
      confirmedName: ""
    };
  },
  methods:{
    add(numb){
      this.counter = this.counter + numb;
    },
    decrementCount(){
      this.counter--;
    },
    setSurname(event){ //event is coming by default from browser, not by Vue
      this.names = "";
      this.surname = event.target.value;
    },
    setNames(event, middleName){
      this.surname = "";
      this.names = middleName + " " + event.target.value;
    },
    setConfirmedName(event){
      this.confirmedName =  event.target.value;
    },
    submitForm(){
      console.log("submited" + (this.confirmedName ? "by " + this.confirmedName : ""));
    }
  }
});

app.mount('#events');
