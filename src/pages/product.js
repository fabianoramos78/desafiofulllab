import React from 'react'
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native'

const Product = ({ navigation }) => (  
  <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>{navigation.state.params.product.Name}</Text>
    <Image
      style={{ width: '100%', height: 300 }}
      source={{uri: navigation.state.params.product.Skus[0].Images[1].ImageUrl}}
    />
    <Text style={styles.complementName}>{navigation.state.params.product.Skus[0].ComplementName}</Text>
    <Text style={styles.title}>Especificações</Text>
    <Text style={styles.especificationsOne}>Marca: {navigation.state.params.product.Brand}</Text>
    <Text style={styles.especificationsTwo}>Composição: {navigation.state.params.product.Specifications.Composição}</Text>
    <Text></Text>
    <Text></Text>
  </View>
  </ScrollView>  
)

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.Name  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    margin: 2
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  complementName: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5
  },
  especificationsOne:{
    flex: 1,
    backgroundColor: '#333333',
    color: '#fff'
  },
  especificationsTwo:{
    flex: 1,
    backgroundColor: '#fff',
    color: '#333333'
  }
})

export default Product

