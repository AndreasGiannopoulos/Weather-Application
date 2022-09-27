<template>
  <div class="weather-info">
    <div class="weather-item" title="Wind">
      <windIcon size="1.5x"></windIcon>
      <span class="value">{{getWeatherInfo.wind}}</span>
    </div>
    <div class="weather-item" title="Humidity">
      <DropletIcon size="1.5x"></DropletIcon>
      <span class="value">%{{getWeatherInfo.humidity}}</span>
    </div>
    <div class="weather-item" title="Cloud">
      <CloudIcon size="1.5x"></CloudIcon>
      <span class="value">%{{getWeatherInfo.clouds}}</span>
    </div>
  </div>
</template>

<script>
import { DropletIcon, WindIcon, CloudIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
  components: {
    WindIcon,
    DropletIcon,
    CloudIcon
  },
  computed:{
    ...mapGetters(["getWeatherInfo"])
  }
};
</script>

<style scoped>
.weather-info{
  display: grid;
  grid-template-columns: auto auto auto;
  text-align: center;
  font-size: 1.2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.weather-item{
  padding: 0 1.5rem;
}

.value{
  padding-left: 2px;
  vertical-align: center;
}
</style>
