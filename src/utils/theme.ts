import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const theme = {
  colors: {
    main: '#F3C583',
    btnColor: '#CD113B',
    background: '#171717',
  },
  dimensions: {
    screenWidth: windowWidth,
  },
};

export {theme};
