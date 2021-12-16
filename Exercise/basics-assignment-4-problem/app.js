const app = Vue.createApp({
    data(){
        return{
            inputClass:"",
            pClass: "visible",
            bgColor: ""
        };
    },
    methods:{
        newClass(event){
            this.inputClass = event.target.value;
        },
        toggleClass(){
            this.pClass === "visible" ? this.pClass = "hidden" : this.pClass = "visible";
        },
        newBg(event){
            event.target.value === "" ? this.bgColor = "" : this.bgColor = "background-color:" + event.target.value;
        }
    }
});
app.mount("#assignment");