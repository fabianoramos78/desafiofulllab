import React, {Component} from 'react'
import { 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity 
} from 'react-native'
import api from '../services/api'
import styles from '../styles/subcategories'

export default class SubCategories extends Component {

  state = {
    counter: 0,
    Categories: [],
    SubCategories: []
  }

  componentDidMount(){
    this.listSubCategories()
  }

  listSubCategories = async () => {
    const response = await api.get('/StorePreference/CategoryTree')
    const { Categories } = response.data
    this.setState({ Categories, SubCategories })
    console.log(Categories)
  }

  renderSubCategory = ({ item }) => (    
    <View>
      <TouchableOpacity    
        onPress={() => {}}
      >      
        <Text>{item.Name}</Text>            
      </TouchableOpacity>
    </View>
    
  )

  render() {
    const { navigation } = this.props
    const category = navigation.getParam('subcategory')  
    const category2 = navigation.getParam('subcategory2')  

    console.log(navigation)
    return(
      <View style={{flex: 1}}>  
        <Text>{category}</Text>      
        <Text>{category2}</Text>  
        <FlatList
          //contentContainerStyle={styles.list}
          data={this.state.Categories}
          keyExtractor={item => item.Id+'id'}
          renderItem={this.renderSubCategory}
        />
      </View>
    )
  }
}

