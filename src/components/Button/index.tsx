import React, {FC} from 'react';
import * as S from './style';

interface Props {
  isBack?: boolean;
}

const Button: FC<Props> = ({isBack, onPress}) => {
  return (
    <S.Container onPress={onPress} isBack={isBack}>
      <S.StyledText>{!isBack ? 'ᐅ' : 'ᐊ'}</S.StyledText>
    </S.Container>
  );
};

export default Button;
