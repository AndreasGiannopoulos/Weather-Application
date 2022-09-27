<template>
  <div class="weather-main">
    <div class="weather-city">
      City:
      <strong>
        {{getWeatherMain.name}}
      </strong>
    </div>
    <div class="weather-temp">
      <div
        class="weather-icon"
      ></div>
      Temperature:
      <strong>
        <span>{{getWeatherMain.temp - 273.15 | round}}</span>
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="weather-tempMin">
      Min Temperature:
      <strong>
        {{getWeatherMain.tempMin - 273.15 | round}}
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="weather-tempMax">
      Max Temperature:
      <strong>
        {{getWeatherMain.tempMax - 273.15 | round}}
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="weather-feelsLike">
      Feels like:
      <strong>
        {{getWeatherMain.feelsLike - 273.15 | round}}
        <sup>&deg;</sup>
      </strong>
    </div>
    <div class="weather-description">Sky: {{getWeatherMain.description}}</div>
    <!-- <img :src=getWeatherMain.iconBg /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getWeatherMain"]),
  }
};
</script>

<style  scoped>
.weather-main{
  font-size: 1.2rem;
  padding-left: 1.5rem;
}
</style>