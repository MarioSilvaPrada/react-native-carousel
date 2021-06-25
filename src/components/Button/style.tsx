import styled, {css} from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background: red;
  padding: 10px;
  position: absolute;
  top: 0;
  ${({isBack}) =>
    isBack
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  z-index: 1;
`;

export const StyledText = styled(Text)``;
