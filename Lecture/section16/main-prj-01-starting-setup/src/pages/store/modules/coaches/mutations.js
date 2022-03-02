export default {
    registerCoach(state, payload){
        state.coaches.push(payload); //payload is formData from CoachForm
    }
};