import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from './components/Category'
import ProductCard, { ProductDetails } from './components/ProductCard'
import data from "./data/data.json"
const category = ['Trending Now', 'All', 'New']
const HomeScreen = (): React.JSX.Element => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [islike, setIsLike] = useState<boolean>(false)
    const [products, setProducts] = useState(data.products)
    
    const Handleliked = (item: ProductDetails)=>{
        const newProducts = products.map((product) => {
            if(product.id === item.id){
                return{
                    ...product,
                    islike: true
                }
            }
            return product
        })
        setProducts(newProducts)
    }
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <Header />

            {/* product */}
            {/* <View style={styles.card}>
                <ProductCard item={data.products[0]} islike={islike} setIsLike={setIsLike}/>
                <ProductCard item={data.products[1]}  islike={islike} setIsLike={setIsLike}/>
            </View> */}
            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={styles.MatchText}>Match Your Text</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Fontisto name="search" size={26} color={"#C0C0C0"} />
                            </View>
                            <TextInput style={styles.TextInput} placeholder='Search' />
                        </View>

                        <FlatList data={category}
                            renderItem={({ item }) => (
                                <Category
                                    item={item}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            )}
                            keyExtractor={item => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />


                    </>
                }
                numColumns={2}
                data={products}
                renderItem={({item, index}) => <ProductCard item={item} islike={islike} 
                Handleliked={Handleliked}
                />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
            />
        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    MatchText: {
        fontSize: 28,
        color: '#000000',
        marginTop: 25,
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
    },
    iconContainer: {
        marginHorizontal: 20,

    },
    TextInput: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    }
})