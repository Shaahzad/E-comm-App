import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type categoryProp = {
    item: string,
    selectedCategory: string | null,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>
}

const Category: React.FC<categoryProp> = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text style={[styles.categoryText,
        selectedCategory === item && {
            backgroundColor: '#E96E6E',
            color: '#ffffff'
        }
      ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        borderRadius: 16,
        textAlign: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})