const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: ""
        }
    },
    computed: {
        updateRes() {
            if (this.counter < 37) {
                return this.result = this.counter + " Not there yet";
            } else if (this.counter > 37){
                return this.result = this.counter + " Too much";
            } else {
                return this.number;
            } 
        }
    },
    watch: {
        result(val) {
            if (val === 37) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 10000);
            }
        }
    },
    methods: {
        addNumb(val) {
            this.counter = this.counter + val;
        }
    }
});
app.mount("#assignment");