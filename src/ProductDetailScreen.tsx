import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'

const imgUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png'
const sizes = ['S', 'M', 'L', 'XL']
const ProductDetailScreen = () => {
    const [selectedsize, setSelectedsize] = useState(null)
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: imgUrl }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}></Text>
                <Text style={[styles.title, styles.price]}></Text>
            </View>
            {/* size container */}
            <Text style={[styles.title, styles.size]}>Size</Text>
            <View style={styles.sizecontainer}>
                {
                    sizes.map((size) => (
                        <TouchableOpacity onPress={()=> {
                            setSelectedsize(size)
                        }} style={styles.sizevaluecontainer}>
                            <Text style={[styles.sizevalue,
                             selectedsize == size && {
                                color: '#E55B5B'
                             }
                            ]}>{size}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </LinearGradient>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: '100%',
        height: 420,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        color: '#444444',
        fontWeight: 'bold'
    },
    price: {
        color: '#4D4C4C',
    },
    size: {
        marginHorizontal: 20,
    },
    sizecontainer:{
        flexDirection: 'row',
        marginHorizontal: 20
    },
    sizevaluecontainer:{
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sizevalue:{
        fontSize: 18,
        fontWeight: '600'
    }
})