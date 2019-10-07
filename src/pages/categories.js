import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'
import api from '../services/api'
import styles from '../styles/categories'

export default class Categories extends Component {

  static navigationOptions = {
    title: 'Fulllab Desafio',
    headerTitleStyle: {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%'
    },
  }

  state = {
    counter: 0,
    Categories: []
  }

  componentDidMount() {
    this.listCategories()
  }

  listCategories = async () => {
    const response = await api.get('/StorePreference/CategoryTree')
    const { Categories } = response.data
    console.log(Categories)
    this.setState({ counter: Categories.length, Categories })
  }

  renderCategory = ({ item }) => (

    <View>
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => {
          this.props.navigation.navigate('SubCategories', {
            'subcategory': item.Name,
            'subcategory2': item.Id
          })
        }}
      >
        <Text style={styles.categoryName}>{item.Name}</Text>
      </TouchableOpacity>
    </View>

  )

  render() {
    return (
      <View style={styles.container}>
        <Text>Selecione sua Categoria</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.Categories}
          keyExtractor={item => item.Id + 'id'}
          renderItem={this.renderCategory}
        />
      </View>
    )
  }
}