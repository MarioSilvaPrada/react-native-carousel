import React, {FC} from 'react';
import * as S from './style';

interface Props {
  imageUrl: string;
  title: string;
}

const Card: FC<Props> = ({images, title, ...props}) => {
  return (
    <S.StyledContainer {...props}>
      <S.StyledText>{title}</S.StyledText>
    </S.StyledContainer>
  );
};

export default Card;
