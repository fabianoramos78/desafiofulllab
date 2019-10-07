import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'
import api from '../services/api'
import currency from '../config/Currency'
import styles from '../styles/main'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Desafio Fulllab',
    headerTitleStyle: {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '95%'
    },
  }

  state = {
    productInfo: {},
    Products: [],
    Offset: 0,
    Query: ''
  }

  componentDidMount() {
    this.searchProducts()
  }

  searchProducts = async (Offset = 0) => {
    const response = await api.post('/Search/Criteria',
      body = {
        Query: `${this.state.Query}`,
        Offset: `${Offset}`,
        Size: 10,
      }
    )
    const { Products, ...productInfo } = response.data
    this.setState({
      Products: [...this.state.Products, ...Products],
      productInfo,
      Offset
    })
  }

  loadMore = () => {
    const { Offset, productInfo } = this.state
    if (Offset === productInfo.Total) return
    const offsetNumber = Offset + 1
    this.searchProducts(offsetNumber)
  }

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.Name}</Text>
      <Image
        style={{ width: '100%', height: 150 }}
        source={{ uri: item.Skus[0].Images[0].ImageUrl }}
      />
      <TouchableOpacity
        style={styles.productButton}
        onPress={() => {
          this.props.navigation.navigate('Product', { product: item })
        }}
      >
        <Text style={styles.productButtonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  )

  render() {

    const { Query } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={{ fontSize: 20, width: '100%', height: 40, textAlign: 'center' }}
          placeholder='Busca de produtos...'
          onChangeText={text => this.setState({ Query: text })}
          value={Query}
          onSubmitEditing={() => { this.props.navigation.navigate('Search', { 'Query': this.state.Query }) }}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.Products}
          keyExtractor={item => item.Id + item.RealId}
          renderItem={this.renderItem}
          numColumns={2}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.2}
        />
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => { this.props.navigation.navigate('Categories') }}
          >
            <Text style={styles.categoryButtonText}>Categorias</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

