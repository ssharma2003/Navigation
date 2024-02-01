import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer, } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from './screens/Home';
import {Details} from './screens/Details';
import Product from './screens/Product';

export type RootStackParamList = {
  Home: undefined;
  Details:{productId:string}
  Product:{productId:string}
};

const Stack= createNativeStackNavigator<RootStackParamList>()
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:"Trending products"
        }}
        />

        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title:"Product details"
        }}
        />

        <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title:"Product price"
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
