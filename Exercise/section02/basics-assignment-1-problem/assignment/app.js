Vue.createApp({
    data: function(){
        return{
            name: "John",
            age: 25,
            imgUrl: "https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400"
        }
    },
    methods:{
        calcAge (){
            return this.age + 5;
        },
        favNumb(){
            return Math.random();
        }
    }
}).mount("#assignment");