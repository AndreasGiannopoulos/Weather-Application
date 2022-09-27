<template>
  <div class="weather-search">
    <input
      type="text"
      placeholder="Search City"
      class="search-control"
      v-model.trim="search"
      @keydown.enter="getData"
    />
    <span class="country" v-if="isSearched">({{getWeatherCountry}})</span>
    <div class="error" v-if="getError">No results found! fix it try again.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: this.$store.state.search
    };
  },
  computed: {
    ...mapGetters(["isSearched", "getWeatherCountry", "getError"])
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    getData() {
      this.fetchWeatherData(this.search);
    }
  }
};
</script>

<style  scoped>
.weather-search{
  text-align: center;
  padding: 3rem 0 2rem;
}
</style>