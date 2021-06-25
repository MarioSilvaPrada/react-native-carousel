import React, {FC, useState, useEffect} from 'react';
import * as S from './style';

interface Props {
  imageUrl: string;
  title: string;
  images: Array<string>;
}

const Card: FC<Props> = ({images, title, ...props}) => {
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const length = images.length;
    const random = Math.floor(Math.random() * length);
    setRandomIndex(random);
  }, []);

  return (
    <S.StyledContainer {...props}>
      <S.StyledImage source={{uri: images[randomIndex]}} />
      <S.StyledText>{title}</S.StyledText>
    </S.StyledContainer>
  );
};

export default Card;
