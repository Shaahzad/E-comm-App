import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from './components/Category'
import ProductCard from './components/ProductCard'

const category = ['Trending Now', 'All', 'New']
const HomeScreen = (): React.JSX.Element => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <Header />
            <Text style={styles.MatchText}>Match Your Text</Text>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Fontisto name="search" size={26} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.TextInput} placeholder='Search' />
            </View>
            {/* category */}
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
            {/* product */}
            <View style={styles.card}>
                <ProductCard />
                <ProductCard />
            </View>
            <View style={styles.card}>
                <ProductCard />
                <ProductCard />
            </View>
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