import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CurrentWeather from '../../components/CurrentWeather';
import {WeatherContext} from '../../contexts/WeatherProvider';
import styled from 'styled-components/native';

const Gradient = styled(LinearGradient).attrs({
  colors: ['#639ee1', '#1267c7'],
})`
  flex: 1;
  padding: 30px;
`;

const Home: React.FC = () => {
  return (
    <WeatherContext.Provider value={null}>
      <Gradient>
        <CurrentWeather />
      </Gradient>
    </WeatherContext.Provider>
  );
};

export default Home;
