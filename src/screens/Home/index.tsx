import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CurrentWeather from '../../components/CurrentWeather';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CurrentWeather />
    </SafeAreaView>
  );
};

export default Home;
