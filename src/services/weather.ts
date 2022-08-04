import axios from 'axios';
import {Weather} from '../types/weather';

export const getWeatherService = async () => {
  try {
    const response = await axios.get<Weather>(
      'http://api.weatherapi.com/v1/current.json?key=0006f13a18044751833234450222607&q=chapecó&aqi=no',
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
