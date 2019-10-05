import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import api from '../services/api'

export default class Main extends Component {

  static navigationOptions = {
    title: 'Desafio Fulllab'
  }

  state = {
    productInfo:{},
    Products: [],
    Offset: 0
  }

  componentDidMount() {
    this.searchProducts()
  }

  searchProducts = async (Offset = 0) => {    
    const response = await api.post('/Search/Criteria', 
      body = {
        Query: "",
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
      <Text style={styles.productComplementName}>{item.Skus[0].ComplementName}</Text>
      <TouchableOpacity
        style={styles.productButton}
        onPress={() => {
          this.props.navigation.navigate('Product', { product: item})
        }}
      >
        <Text style={styles.productButtonText}>Saiba Mais</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
    return(
      <View style={styles.container}>
        <FlatList        
          contentContainerStyle={styles.list}
          data={this.state.Products}
          keyExtractor={item => item.Id+item.RealId}
          renderItem={this.renderItem}
          numColumns={2}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.2}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 2,
  },
  productContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 5,
    width: '49%',
    margin: 2
  },
  productName: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  productComplementName: {
    fontSize: 16,
    color: '#999999',
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  }
})