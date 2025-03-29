import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cardImg.png")} style={styles.coverImage}/>
      <View style={styles.content}>
      <Text style={styles.title}>Jacket Jeans</Text>
      <Text style={styles.Price}>Rs: 999</Text>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    coverImage:{
        height: 256,
        width: 167,
        borderRadius: 20,
        marginVertical: 10,
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        color: '#444444'
    },
    Price:{
        fontWeight: '600',
        fontSize: 18,
        color: '#9c9c9c'
    },
    content:{
        paddingLeft: 15,
    }
})