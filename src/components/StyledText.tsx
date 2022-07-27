import React, {ReactNode} from 'react';
import {Animated, StyleProp, TextStyle} from 'react-native';
import styled from 'styled-components/native';

interface CustomTextProps {
  /** Font-size: tamanho da fonte */
  size?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  /** Margin-left: valor em pixels de margem a esquerda do texto */
  ml?: number;
  /** Margin-right: valor em pixels de margem a direita do texto */
  mr?: number;
  /** Margin-top: valor em pixels de margem acima do texto */
  mt?: number;
  /** Margin-bottom: valor em pixels de margem abaixo do texto */
  mb?: number;
}

const getMarginString = ({ml, mt, mb, mr}: CustomTextProps) =>
  `${mt || 0}px ${mr || 0}px ${mb || 0}px ${ml || 0}px `;

const CustomText = styled(Animated.Text)<CustomTextProps>`
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
  font-size: ${p => p.size || 14}px;
  color: ${p => p.color || p.theme.mainText} !important;
  text-align: ${p => p.align || 'left'};
  margin: ${getMarginString};
`;

export const StyledText = (props: CustomTextProps) => {
  return <CustomText {...props} style={[props.style]} />;
};
