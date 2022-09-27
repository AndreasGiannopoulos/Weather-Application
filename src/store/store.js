import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiBase: "https://api.openweathermap.org/data/2.5/",
    apiKey: "75b0295ecc7e074dcc06ac4d1af390f9",   
    defaultSearch: "athens",
    search: "",
    isError: false, 
    weatherData: {},
  },
  getters: {
    getWeatherMain(state) {
      const { temp, feelsLike, description, icon, info, name, tempMin, tempMax } = state.weatherData;
      return {
        temp,
        feelsLike,
        description,
        info,
        icon,
        name,
        tempMin,
        tempMax
      };
    },
    getWeatherInfo(state) {
      const { wind, clouds, humidity } = state.weatherData;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getWeatherCountry(state) {
      return state.weatherData.country;
    },
    isSearched(state) {
      return state.search !== "";
    },
    getError(state) {
      return state.isError;
    },
    getBackgroundImage(state){
      const {icon} = state.weatherData
      return {
        icon
      }
    },
  },
  mutations: {
    ["SET_SEARCH"](state, search) {
      state.search = search.toLowerCase();
    },
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
  },
  actions: {
    async fetchWeatherData({ commit, state }, search) {
      try {
        commit("SET_SEARCH", search);
        const response = await axios.get(
          `${state.apiBase}weather?q=${search}&appid=${state.apiKey}`
        );
        const newWeatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          tempMin: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
          feelsLike: response.data.main.feels_like,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon.substring(0, 3),
          info: response.data.weather[0].main,
          wind: response.data.wind.speed, 
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          country: response.data.sys.country,
        };
        commit("SET_WEATHER_DATA", newWeatherData);
        commit("SET_ERROR", false);
        console.log(newWeatherData)
      } catch (error) {
        console.log(error);
        commit("SET_ERROR", true);
        commit("SET_WEATHER_DATA", {});
      }
    },
  },
});

export default store;

//  http://openweathermap.org/img/wn/'+getWeatherMain.icon+'d@2x.png