const app = Vue.createApp({
    data: function () {
        return {            
            courseGoal: "<h1>Finish the course!</h1>",
            courseGoalA: "Learn Vue",
            vueLink: "https://www.google.com/"
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA; //can be acessed everything from data
            } else{
                return "Master Vue";
            }
        }
    }
});
app.mount("#user-goal");