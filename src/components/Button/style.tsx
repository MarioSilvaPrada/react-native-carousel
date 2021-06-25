import styled, {css} from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.btnColor};
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  position: absolute;
  top: 0;
  ${({isBack}) =>
    isBack
      ? css`
          left: 15px;
        `
      : css`
          right: 15px;
        `}

  z-index: 1;
`;

export const StyledText = styled(Text)`
  color: white;
  font-size: 15px;
`;
