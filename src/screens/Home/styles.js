import {StyleSheet} from 'react-native';
import {DEVICE} from '../../constants';

import {Components} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    height:DEVICE.width,
    width:'80%',
    resizeMode:'contain'
  }
});
