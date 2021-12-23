<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      // body & headers are not needed because we'll get a data
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://first-vue-project-339eb-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          //we're using arrow functions so we can use this. inside (this way it'll point to the same as outside)
          if (response.ok) {
            return response.json(); //returns a promise
          }
        })
        .then((data) => {
          //data is an object
          this.isLoading = false;
          console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false; // on catch you're still loading
          this.error = 'Failed to fecth data. Please try again later.';
        });
    },
  },
  mounted() {
    //mounted hook is triggered/called when this exact component gets mounted (fully initializaed & ready to get started)
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>