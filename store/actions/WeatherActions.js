import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export const setWeather = (weatherData) => ({
    type: 'SET_WEATHER',
    payload: weatherData,
  });

export const setError = () => ({
    type: 'SET_ERROR',
    payload: 'City not Found'
  });


export const fetchWeatherData = (city) => {
    return async (dispatch) => {
      try {
        console.log('aaaaa')
        const response = await axios.get(BASE_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric', // or 'imperial' for Fahrenheit
          },
        });
        dispatch(setWeather(response.data));
      } catch (error) {
        dispatch(setError())
      }
    };
  };