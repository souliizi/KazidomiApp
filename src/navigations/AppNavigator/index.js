import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '../RootNavigation';

import ProductDetails from '../../screens/ProductDetails';
import Home from '../../screens/Home';


const Stack = createStackNavigator();
const AppNavigator = () => {

  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackTitle: '',
              headerBackTitleVisible: false,
              headerTintColor: '#000000',
              headerTitle: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="product_details"
            component={ProductDetails}
            options={{
              headerBackTitle: '',
              headerBackTitleVisible: false,
              headerTintColor: '#000000',
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
