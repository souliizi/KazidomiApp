import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import {TOP_TRENDS} from '../../../DummyData';


const TopTrends = ({navigation}) => {
  const onPressCard = (item) => {
    navigation.navigate('product_details', {item});
  };

  const keyExtractor = (item, index) => index.toString();

  const RenderHeader = () => {
    return (
      <View
        style={styles.container}>
        <Text>On craque pour</Text>
        <View style={styles.containerHeader}>
          <Text style={{paddingHorizontal: 5}}>Plus</Text>
          <FontAwesome name="caret-right" size={15} />
        </View>
      </View>
    );
  };

  const RenderFilterCard = ({item}) => {
    const {thumbnail, name, price} = item || {};
    return (
      <View style={{marginRight: 10}}>
        <TouchableOpacity onPress={() => onPressCard(item)}>
          <Image
            source={thumbnail}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <View style={{marginVertical: 10, width: 150}}>
          <Text numberOfLines={1} ellipsizeMode="tail" >
            {name}
          </Text>
          <Text >{`€ ${price}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{margin: 10}}>
      <RenderHeader />
      <FlatList
        style={{paddingBottom: 10}}
        showsHorizontalScrollIndicator={false}
        data={TOP_TRENDS}
        renderItem={RenderFilterCard}
        keyExtractor={keyExtractor}
        horizontal
      />
    </View>
  );
};

export default TopTrends;
