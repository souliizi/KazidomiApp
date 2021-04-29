import {StyleSheet} from 'react-native';

import {Components} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Components.Background.core,
    borderRadius: 5,
    borderColor: Components.Border,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  filterContainer: {
    backgroundColor: Components.Background.core,
    justifyContent: 'center',
    flex: 3,
  },
});
