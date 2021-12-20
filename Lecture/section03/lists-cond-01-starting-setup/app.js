const app = Vue.createApp({
  data() {
    return { 
      goalVal:"",
      goals: [],
      myObj: {name: 'Max', age: 31}
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.goalVal);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
