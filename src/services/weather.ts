import axios from 'axios';
import {Welcome} from '../types/weather';
import {api} from './api';

export const getWeatherService = async () => {
  try {
    const response = await axios.get<Welcome>(
      'http://api.weatherapi.com/v1/current.json?key=0006f13a18044751833234450222607&q=chapecó&aqi=no',
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
