import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import CartCard from './components/CartCard'

const CartScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <CartCard />
      <CartCard />
      <FlatList
      data={[1,2,3,4,5,6]}
      renderItem={CartCard}
      ListFooterComponent={
        <>
              <View style={styles.priceContainer}>
        <View style={styles.priceAndTitle}>
          <Text style={styles.text}>Total:</Text>
          <Text style={styles.text}>Rs: 500</Text>
        </View>
        <View style={styles.priceAndTitle}>
          <Text style={styles.text}>Shipping:</Text>
          <Text style={styles.text}>Rs: 50</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.priceAndTitle}>
        <Text style={styles.text}>Grand Total:</Text>
        <Text style={[styles.text, {color: 'black', fontWeight: '700'}]}>Rs: 6000</Text>
      </View>
        </>
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.buttontext}>CheckOut</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  headerContainer: {
    marginBottom: 20
  },
  priceContainer:{
  marginTop: 40
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  },
  text: {
    color: '#757575',
    fontSize: 18
  },
  divider: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginVertical: 10
  },
  checkoutButton:{
    backgroundColor: '#E55B5B',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10
  },
  buttontext:{
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    padding: 10
  }
})