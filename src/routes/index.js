import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main';
import Sale from '../pages/Sale';
import Cart from '../pages/Cart';
import {primary} from '../shared/themes/colors';

const Routes = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="kitchen" size={28} color={tintColor} />
          ),
        },
      },
      Sale: {
        screen: Sale,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="attach-money" size={28} color={tintColor} />
          ),
        },
      },
      Cart: {
        screen: Cart,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon name="shopping-cart" size={28} color={tintColor} />
          ),
        },
      },
    },
    {
      swipeEnabled: true,
      initialRouteName: 'Main',
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: primary,
          borderBottomWidth: 10,
        },
        contentContainerStyle: {
          backgroundColor: '#FFF',
        },
        activeTintColor: 'gray',
        inactiveTintColor: 'lightgray',
      },
    },
  ),
);

export default Routes;
