import React, {useEffect, useState} from 'react';
import {getWeatherService} from '../services/weather';
import styled from 'styled-components/native';
import {StyledText} from './StyledText';
import {Welcome} from '../types/weather';

const Wrapper = styled.View`
  padding: 10px;
  align-items: center;
  align-self: center;
`;

const CurrentWeather: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<Welcome | undefined>();

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await getWeatherService();
        if (response) {
          setCurrentWeather(response);
        }

        console.log(response);
      } catch (err) {
        console.log(err);
        return err;
      }
    }

    getWeather();
  }, []);

  return (
    <Wrapper>
      <StyledText size={25}>{currentWeather?.location.name}</StyledText>
      <StyledText size={90}>{currentWeather?.current.temp_c}</StyledText>
      <StyledText size={20}>
        {currentWeather?.current.condition.text}
      </StyledText>
      <StyledText size={18}>H: 98 L: 67</StyledText>
    </Wrapper>
  );
};

export default CurrentWeather;
