import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'


const imgUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png'
const sizes = ['S', 'M', 'L', 'XL']
const colorsArray = [
    "#91A1B0",
    "#B11D1D",
    "#1F44A3",
    "#9f632A",
    "#1D752B",
    "#000000"
]
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'Product_Details'>;

const ProductDetailScreen = () => {
    const [selectedsize, setSelectedsize] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const route = useRoute<ProductDetailRouteProp>()
    const item = route.params.item
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Header isCart={false}/>
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.title, styles.price]}>
                    {item.price}
                </Text>
            </View>
            {/* size container */}
            <Text style={[styles.title, styles.size]}>Size</Text>
            <View style={styles.sizecontainer}>
                {
                    sizes.map((size) => (
                        <TouchableOpacity onPress={() => {
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
            <Text style={[styles.title, styles.color]}>Colors</Text>
            <View style={styles.colorcontainer}>
                {
                    colorsArray.map((color) => (
                        <TouchableOpacity onPress={() => setSelectedColor(color)}
                            style={[styles.circleBorder, selectedColor == color &&
                            {
                                borderColor: color, borderWidth: 2,
                            }]}>
                            <View style={[styles.circle, { backgroundColor: color }]} />
                        </TouchableOpacity>
                    )
                    )
                }
            </View>
            {/* button container */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
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
    sizecontainer: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    sizevaluecontainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sizevalue: {
        fontSize: 18,
        fontWeight: '600'
    },
    color: {
        marginHorizontal: 20,
        marginTop: 20
    },
    colorcontainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#E55B5B',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})