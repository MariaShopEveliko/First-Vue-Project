const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: "manuel", name: "Manuel Lorenz", phone: "01234 5678 991", email: "manuel@localhost.com" },
                { id: "julie", name: "Julie Jones", phone: "09876 543 221", email: "julie@localhost.com" }
            ]
        };
    }
});

/* .component() Tells Vue that we want to create a component (like custom html el-t).
First: identifyer (component name) which made up by multiword with dashes
Second: config object - new app that will be connected to the main app */
app.component("friend-contact", {
    template: `
    <li :key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `, //define the html code of this component - mini app
    data(){
        return {
            detailsAreVisible: false,
            friend: { id: "test", name: "Test Friend", phone: "09452 296 239", email: "test@localhost.com" }
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}); 

app.mount("#app");