import React, {useEffect, useRef, useState} from 'react';
import {getWeatherService} from '../services/weather';
import styled from 'styled-components/native';
import {StyledText} from './StyledText';
import {Weather} from '../types/weather';
import {ActivityIndicator, Image} from 'react-native';

const Wrapper = styled.View`
  padding: 10px;
  align-items: center;
  align-self: center;
`;

const Icon = styled.Image`
  height: 100px;
  width: 100px;
`;

const CurrentWeather: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState<Weather | undefined>();
  const isMonted = useRef(false);

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await getWeatherService();
        if (response) {
          setCurrentWeather(response);
        }
        setIsLoading(false);
      } catch (err) {
        return err;
      } finally {
        if (isMonted) {
          setIsLoading(false);
        }
      }
    }

    isMonted.current = true;
    getWeather();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        // eslint-disable-next-line react-native/no-inline-styles
        <ActivityIndicator size="large" style={{flex: 1}} color={'white'} />
      ) : (
        <>
          <StyledText color={'white'} size={25}>
            {currentWeather?.location.name}
          </StyledText>
          <Icon
            source={{uri: `http:${currentWeather?.current.condition.icon}`}}
          />
          <StyledText color={'white'} size={90}>
            {currentWeather?.current.temp_c}
          </StyledText>
          <StyledText color={'white'} size={20}>
            {currentWeather?.current.condition.text}
          </StyledText>
          <StyledText color={'white'} size={18}>
            Wind: {currentWeather?.current.wind_kph}/kph
          </StyledText>

          <StyledText mt={20} color={'white'}>
            Last update: {currentWeather?.current.last_updated}
          </StyledText>
        </>
      )}
    </Wrapper>
  );
};

export default CurrentWeather;
