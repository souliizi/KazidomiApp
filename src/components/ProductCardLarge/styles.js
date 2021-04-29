import {StyleSheet} from 'react-native';

import {DEVICE} from '../../constants';
import {Components} from '../../styles/colors';

const IMAGE_WIDTH = DEVICE.width / 2 - 20;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.1;

export default StyleSheet.create({
  imageContainerStyle: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 3,
    backgroundColor: Components.Background.tint75Percent,
  },
  

});
