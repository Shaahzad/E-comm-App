import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './components/Header'
import CartCard from './components/CartCard'
import { cartContext } from './context/CartContext'

const CartScreen = () => {
  const context = useContext(cartContext)
  if (!context) {
      return null;
  }
  const { Carts, totalPrice } = context
return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      {/* <CartCard />
      <CartCard /> */}
      <FlatList
      data={Carts}
      renderItem={({ item }) => <CartCard item={item} />} 
      keyExtractor={(item) => item.id} 
      ListFooterComponent={
        <>
              <View style={styles.priceContainer}>
        <View style={styles.priceAndTitle}>
          <Text style={styles.text}>Total:</Text>
          <Text style={styles.text}>Rs: {totalPrice}</Text>
        </View>
        <View style={styles.priceAndTitle}>
          <Text style={styles.text}>Shipping:</Text>
          <Text style={styles.text}>Rs: 00</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.priceAndTitle}>
        <Text style={styles.text}>Grand Total:</Text>
        <Text style={[styles.text, {color: 'black', fontWeight: '700'}]}>Rs: {totalPrice}</Text>
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