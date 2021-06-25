/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/utils/theme';
import {data} from './src/content';
import * as S from './App.styled';

import Card from './src/components/Card';
import Button from './src/components/Button';

const App: () => Node = () => {
  const scrollRef = useRef(null);
  const [cardPositions, setCardPositions] = useState({
    currentScreenPosition: 0,
    firstCardPosition: null,
    lastCardPosition: null,
  });

  const screenWidth = theme.dimensions.screenWidth;

  const handlePress = (isBack = false) => {
    const {currentScreenPosition, lastCardPosition} = cardPositions;
    let goToX = screenWidth;

    if (isBack) {
      goToX = goToX * -1;
    }
    if (
      currentScreenPosition > 0 ||
      currentScreenPosition + screenWidth < lastCardPosition
    ) {
      scrollRef.current?.scrollTo({
        x: currentScreenPosition + goToX,
        animated: true,
      });
    }
  };

  const getCurrentScreenPosition = value => {
    const newObj = {...cardPositions};
    newObj.currentScreenPosition = value;
    setCardPositions(newObj);
  };

  const onLayout = (event, index, arr) => {
    const {x} = event.nativeEvent.layout;
    const newObj = {...cardPositions};
    if (index === 0) {
      newObj.firstCardPosition = x;
      setCardPositions(newObj);
    }
    if (arr.length === index + 1) {
      newObj.lastCardPosition = x;
      setCardPositions(newObj);
    }
  };

  useEffect(() => {
    console.log(cardPositions);
  }, [cardPositions]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <S.Container>
          <Text>teste</Text>
          <S.StyledScrollView
            ref={scrollRef}
            horizontal
            scrollEnabled={true}
            scrollEventThrottle={7}
            onScroll={e =>
              getCurrentScreenPosition(e.nativeEvent.contentOffset.x)
            }>
            <S.CarouselWrapper>
              {data.map(({title}, i, arr) => (
                <Card
                  key={title}
                  title={title}
                  onLayout={e => onLayout(e, i, arr)}
                />
              ))}
            </S.CarouselWrapper>
          </S.StyledScrollView>
          <S.ButtonWrapper>
            {cardPositions.currentScreenPosition > 0 && (
              <Button isBack onPress={() => handlePress(true)} />
            )}

            {!(
              cardPositions.currentScreenPosition + screenWidth >
              cardPositions.lastCardPosition
            ) && <Button onPress={() => handlePress()} />}
          </S.ButtonWrapper>
        </S.Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
