import { createStackNavigator } from 'react-navigation'
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

import Main from './pages/main'
import Product from './pages/product'
import Search from './pages/search'
import Categories from './pages/categories'
import SubCategories from './pages/subcategories'

export default createStackNavigator(
  {
    Main,
    Product,
    Search,
    Categories,
    SubCategories,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552f',               
      },
      headerTintColor: '#FFF',
    }
})