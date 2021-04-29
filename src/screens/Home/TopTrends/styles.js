import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({

  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 3,
    resizeMode: 'cover',
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  containerHeader:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});
