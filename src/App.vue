<template>
  <div id="app">
    <Header />
    <div 
      class="app"
      :class="'weather-'+getBackgroundImage.icon"
    >
      <div
        class="card"
      >
        <div>
          <WeatherSearch />
        </div>
        <div>
          <WeatherMain />
        </div>
        <div>
          <WeatherInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import WeatherSearch from "@/components/WeatherSearch";
import WeatherMain from "@/components/WeatherMain";
import WeatherInfo from "@/components/WeatherInfo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    WeatherSearch,
    WeatherMain,
    WeatherInfo,
  },
  computed: {
    ...mapGetters(["isSearched", "getBackgroundImage", "getError"]),
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    initData() {
      this.fetchWeatherData(this.$store.state.defaultSearch);
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;0,800;0,900;1,300;1,500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
body {
  background-color: fade(#000, 30);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.card {
  background-color: rgb(147, 112, 243);
  border: 1px solid black;
  border-radius: 5px;
}
.weather-01d{
  background-image: url("./assets/images/01d.jpg");
  background-size: cover;
}
.weather-01n{
  background-image: url("./assets/images/01n.jpg");
  background-size: cover;
}
.weather-02d{
  background-image: url("./assets/images/02d.jpg");
  background-size: cover;
}
.weather-02n{
  background-image: url("./assets/images/02n.jpg");
  background-size: cover;
}
.weather-03d{
  background-image: url("./assets/images/03d.jpg");
  background-size: cover;
}
.weather-03n{
  background-image: url("./assets/images/03n.jpg");
  background-size: cover;
}
.weather-04d{
  background-image: url("./assets/images/04d.jpg");
  background-size: cover;
}
.weather-04n{
  background-image: url("./assets/images/04n.jpg");
  background-size: cover;
}
.weather-09d{
  background-image: url("./assets/images/09d.jpg");
  background-size: cover;
}
.weather-09n{
  background-image: url("./assets/images/09n.jpg");
  background-size: cover;
}
.weather-10d{
  background-image: url("./assets/images/10d.jpg");
  background-size: cover;
}
.weather-10n{
  background-image: url("./assets/images/10n.jpg");
  background-size: cover;
}
.weather-11d{
  background-image: url("./assets/images/11d.jpg");
  background-size: cover;
}
.weather-11n{
  background-image: url("./assets/images/11n.jpg");
  background-size: cover;
}
.weather-13d{
  background-image: url("./assets/images/13d.jpg");
  background-size: cover;
}
.weather-13n{
  background-image: url("./assets/images/13n.jpg");
  background-size: cover;
}
.weather-error{
  background-image: url("./assets/images/error.jpg");
  background-size: cover;
}
</style>
