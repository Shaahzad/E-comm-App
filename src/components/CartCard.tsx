import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {  useContext } from 'react'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { addTocartDetail, cartContext } from '../context/CartContext'

// const imgUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png'
const CartCard = ({ item }: {item: addTocartDetail}) => {
  const context = useContext(cartContext)
  if(!context) return null
  const {deleteItemfromCart} = context
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImg} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Rs: {item.price}</Text>
        <View style={styles.circlesizeContainer}> 
          <View style={[styles.circle, {
                backgroundColor: item.color || 'transparent'
          }]} />
          <View style={styles.sizeCircle}>
            <Text style={styles.sizeText}>{item.size || 'No'}</Text>
            </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItemfromCart(item)}>
      <FontAwesome6 name='trash' color={'#E96E6E'} size={20} />
      </TouchableOpacity>
    </View>
  )

}

export default CartCard

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  coverImg: {
    height: 125,
    width: '25%',
    borderRadius: 10
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500'
  },
  price: {
    color: '#797979',
    marginVertical: 10,
    fontSize: 18,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  circlesizeContainer:{
    flexDirection: 'row',
    
  },
  sizeCircle:{
    height: 32,
    width: 32,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  sizeText:{
    fontSize: 18,
    fontWeight: '500'
  }
})