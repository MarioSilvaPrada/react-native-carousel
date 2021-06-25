import styled from 'styled-components';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';

export const Container = styled(View)``;

export const CarouselWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const StyledScrollView = styled(ScrollView)`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled(View)`
  width: 100%;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  height: 100%;
  justify-content: center;
  background: ${({theme}) => theme.colors.background};
`;

export const Title = styled(Text)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  color: ${({theme}) => theme.colors.main};
`;
