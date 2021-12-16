Vue.createApp({
    data: function(){
        return {
            alert: "My alert",
            user: "",
            confirmedUser: ""
        }
    },
    methods:{
        showAlert(){
            alert(this.alert);
        },
        keyDownFunc(event){
            this.user = event.target.value;
        },
        confirmedEnter(event){
            this.confirmedUser = event.target.value;
        }
    }
}).mount("#assignment");