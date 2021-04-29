import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Divider, Rating} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';
import {DEVICE} from '../../constants';

import {styles} from './styles';



const ProductDetails = ({navigation, route}) => {
  const {item} = route.params || {};
  const {name, price, images, description, thumbnail} =
    item || {};



  const RenderTitle = () => {
    return (
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <Text>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>{`€ ${price}`}</Text>
          <Rating imageSize={20} ratingBackgroundColor="#f7f7f7" />
        </View>
      </View>
    );
  };

  const RenderDescription = () => {
    return (
      <View style={{paddingHorizontal: 10}}>
        <Text>Description</Text>
        <Text style={{marginTop: 10}}>
          {description}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems:'center'}}>
              <Image
                source={thumbnail}
                style={{height:DEVICE.width, width:'100%',resizeMode:'contain'}}/>
            </View>
      <RenderTitle />
      <View style={{marginVertical: 15}}>
        <Divider />
      </View>
      <RenderDescription />
      <Button label="Ajouter" containerStyle={{margin: 25}} />
    </ScrollView>
  );
};

export default ProductDetails;
