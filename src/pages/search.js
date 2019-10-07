import React, { Component } from 'react'
import { 
  View, 
  Text,
  FlatList, 
  TouchableOpacity,
  Image } from 'react-native'
import api from '../services/api'
import currency from '../config/Currency'
import styles from '../styles/search'

export default class Search extends Component { 
  
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
    productInfo:{},
    Products: [],
    Offset: 0,
    Query: this.props.navigation.getParam('Query')
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
    console.log(Products)
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
        source={{ uri:item.Skus[0].Images[0].ImageUrl }}
      />
      <Text style={styles.productPrice}>{currency.format(item.Skus[0].Sellers[0].Price, { code: 'BRL' })}</Text>
      <Text style={styles.productPriceCount}>Ou em até {item.Skus[0].Sellers[0].BestInstallment.Count} vezes de</Text>
      <Text style={styles.productPriceValue}>{currency.format(item.Skus[0].Sellers[0].BestInstallment.Value, { code: 'BRL' })}</Text>
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

    const { navigation } = this.props
    const Query = navigation.getParam('Query')

    return(
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Text style={styles.containerSearchText}>
            Resultados da busca por: {this.props.navigation.getParam('Query')}
          </Text>
        </View>
        <FlatList        
          contentContainerStyle={styles.list}
          data={this.state.Products}
          keyExtractor={item => item.Id+item.RealId}
          renderItem={this.renderItem}
          numColumns={2}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />        
      </View>
    )
  }
}

