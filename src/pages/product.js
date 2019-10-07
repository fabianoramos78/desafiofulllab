import React from 'react'
import {
  Text,
  Image,
  View,
  ScrollView
} from 'react-native'
import styles from '../styles/product'

const Product = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{navigation.state.params.product.Name}</Text>
      <Image
        style={{ width: '100%', height: 300 }}
        source={{ uri: navigation.state.params.product.Skus[0].Images[1].ImageUrl }}
      />
      <Text style={styles.complementName}>{navigation.state.params.product.Skus[0].ComplementName}</Text>
      <Text style={styles.title}>Especificações</Text>
      <Text style={styles.especificationsOne}>Marca: {navigation.state.params.product.Brand}</Text>
      <Text style={styles.especificationsTwo}>Composição: {navigation.state.params.product.Specifications.Composição}</Text>
    </View>
  </ScrollView>
)

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.Name
})

export default Product

