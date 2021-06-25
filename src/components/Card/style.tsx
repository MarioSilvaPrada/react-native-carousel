import styled from 'styled-components';
import {View, Text} from 'react-native';

export const StyledContainer = styled(View)`
  background: ${({theme}) => theme.colors.main};
  padding: 10px;
  margin-horizontal: 5px;
  width: ${({theme}) => theme.dimensions.screenWidth / 4 - 10}px;
`;

export const StyledText = styled(Text)``;
