import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ProductCardLarge} from '../../../components';
import {styles} from './styles';
import {BEST_SELLERS} from '../../../DummyData';


const BestSellers = ({navigation}) => {
  const onPressCard = (item) => {
    navigation.navigate('product_details', {item});
  };

  const keyExtractor = (item, index) => index.toString();

  const RenderHeader = () => {
    return (
      <View
        style={styles.container}>
        <Text>Best Sellers</Text>
        <View style={styles.containerHeader}>
          <Text style={{paddingHorizontal: 5}}>Plus</Text>
          <FontAwesome name="caret-right" size={15} />
        </View>
      </View>
    );
  };

  const RenderProductCard = ({item, index}) => {
    const isEven = index % 2 === 0;
    const {name, price, thumbnail} = item || {};

    return (
      <View style={isEven ? {marginRight: 8} : {marginLeft: 8}}>
        <ProductCardLarge
          title={name}
          price={price}
          imageURL={thumbnail}
          onPress={() => onPressCard(item)}
        />
      </View>
    );
  };

  return (
    <View style={{margin: 10}}>
      <RenderHeader />
      <FlatList
        style={{paddingBottom: 10}}
        showsHorizontalScrollIndicator={false}
        data={BEST_SELLERS}
        renderItem={RenderProductCard}
        keyExtractor={keyExtractor}
        numColumns={2}
      />
    </View>
  );
};

BestSellers.propTypes = {
  navigation: PropTypes.object,
};

export default BestSellers;
