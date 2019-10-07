import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 2,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 2,
    width: '49%',
    margin: 2
  },
  productName: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  productPrice: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight:'bold',
    color: '#000',
    marginTop: 5,
    lineHeight: 24
  },
  productPriceCount: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
    marginTop: 5,
    lineHeight: 24
  },
  productPriceValue: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color: '#DA552F',
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
  },
  categoryContainer: {
    backgroundColor: '#DA552F',
    padding: 8,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    height: 40,
    width: '50%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
})

export default styles