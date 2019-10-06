import { createStackNavigator } from 'react-navigation'
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

import Main from './pages/main'
import Product from './pages/product'
import Search from './pages/search'

export default createStackNavigator(
  {
    Main,
    Product,
    Search
  }, 
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552f'
      },
      headerTintColor: '#FFF'
    }
})