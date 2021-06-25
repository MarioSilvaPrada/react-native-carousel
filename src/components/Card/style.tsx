import styled from 'styled-components';
import {View, Text, Image} from 'react-native';

export const StyledContainer = styled(View)`
  background: ${({theme}) => theme.colors.main};
  padding: 10px;
  margin-horizontal: 5px;
  width: ${({theme}) => theme.dimensions.screenWidth / 4 - 10}px;
  border-radius: 5px;
`;

export const StyledText = styled(Text)`
  text-align: center;
  margin-top: 5px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;
