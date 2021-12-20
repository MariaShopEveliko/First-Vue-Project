const app = Vue.createApp({
    data() {
        return {
            myTask: "",
            tasks: [],
            listIsVisible: true
        };
    },
    computed: {
        btnLabel() {
            return this.listIsVisible ?  "Hide" : "Show";
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.myTask);
        },
        toggleVisibility() {
            this.listIsVisible = !this.listIsVisible;
        }
    }
});
app.mount("#assignment");