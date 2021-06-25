import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const theme = {
  colors: {
    main: 'lime',
  },
  dimensions: {
    screenWidth: windowWidth,
  },
};

export {theme};
