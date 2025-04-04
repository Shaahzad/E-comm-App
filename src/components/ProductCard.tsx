import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../App'

export type ProductDetails = {
    id: string,
    image: string,
    title: string,
    price: number,
    islike: boolean,
    size: string | null;
    color: string | null;  
}
type ProductCardProps = {
    item: ProductDetails,
    islike: boolean,
    Handleliked: (item: ProductDetails) => void
}
  
const ProductCard: React.FC<ProductCardProps> =({Handleliked, item}) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product_Details', {item})} style={styles.container}>Handleliked
      <Image source={{uri: item.image}} style={styles.coverImage}/>
      <View style={styles.content}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.Price}>Rs: {item.price}</Text>
      <TouchableOpacity onPress={() => Handleliked(item)} style={styles.heartcontainer}>
        {
            item.islike ?
            <AntDesign name='heart' size={20} color={'#E96E6E'}/>
            :
            <AntDesign name='hearto' size={20} color={'#E96E6E'}/>
        }
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        position: 'relative',
    },
    coverImage:{
        height: 200,
        width: 150,
        borderRadius: 20,
        marginVertical: 10,
        objectFit: "contain",
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
    },
    heartcontainer:{
        height: 34,
        width: 34,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: -180,
        left: 110
    }
})