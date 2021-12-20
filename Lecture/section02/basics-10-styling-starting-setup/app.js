const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
            boxESelected: false,
            boxISelected: false
        };
    },
    computed: {
        boxEClasses(){
            return {active: this.boxESelected};
        }
    },
    methods:{
        boxSelected(box){
            if (box === "A"){
                this.boxASelected = true; //can't toggle
            } else if (box === "B") {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === "C"){
                this.boxCSelected = !this.boxCSelected;
            } else if (box === "D"){
                this.boxDSelected = !this.boxDSelected;
            } else if (box === "E"){
                this.boxESelected = !this.boxESelected;
            } else if (box === "I"){
                this.boxISelected = !this.boxISelected;
            }
        }
    }
});
app.mount("#styling");