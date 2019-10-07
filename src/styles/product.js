import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 5,
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

export default styles