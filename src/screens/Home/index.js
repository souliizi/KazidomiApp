import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {DEVICE} from '../../constants';
import {styles} from './styles'
import TopTrends from './TopTrends';
import BestSellers from './BestSellers';

const homeImage = require('../../image/accueil.png');

const Home = ({navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#FFFFFF'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
          <Image
            source={homeImage}
            style={styles.image}/>
      </View>
      <TopTrends navigation={navigation} />
      <BestSellers navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
