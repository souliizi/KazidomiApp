import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const {
  imageContainerStyle,
  imageStyle,

} = styles;

const ProductCardLarge = ({title, price, imageURL, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={imageContainerStyle} onPress={onPress}>
        <Image
          resizeMode="cover"
          source={imageURL}
          style={imageStyle}
        />
      </TouchableOpacity>
      <View>
        <Text
          numberOfLines={1}
          numberOfLines={1}
          ellipsizeMode="tail">
          {title}
        </Text>
        <Text>{`€ ${price}`}</Text>
      </View>
    </View>
  );
};

ProductCardLarge.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  onPress: PropTypes.func,
};

ProductCardLarge.defaultProps = {
  title: '',
  price: 0,
  onPress: () => {},
};

export default ProductCardLarge;
