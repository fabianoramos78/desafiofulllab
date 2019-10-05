import React from 'react'
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import ImageSlider from 'react-native-image-slider'

/*
<WebView
  source={{ uri: 'https://www.youtube.com/watch?v+navigation.state.params.product.Videos}}
/>

<Image
      style={{ width: '100%', height: 300 }}
      source={{uri: navigation.state.params.product.Skus[0].Images[0].ImageUrl}}
    />
*/
const Product = ({ navigation }) => (  
  <View style={styles.container}>
    <Text style={styles.title}>{navigation.state.params.product.Name}</Text>      
    <Image
      style={{ width: '100%', height: 300 }}
      source={{uri: navigation.state.params.product.Skus[0].Images[0].ImageUrl}}
    />
  </View>
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
    fontWeight: 'bold'
  }
})

export default Product

