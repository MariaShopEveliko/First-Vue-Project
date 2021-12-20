Vue.createApp({
    data: function () { // same as data(){}
        return {
            goals: [],
            enteredValue: ""
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ""; //reset the input
        }
    }
}).mount("#app");