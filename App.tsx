import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetailScreen from './src/ProductDetailScreen'
import { ProductDetails } from './src/components/ProductCard'
import CartScreen from './src/CartScreen'
import { CartProvider, cartContext } from './src/context/CartContext'


const CartTabIcon = ({ color, size }: any) => {
  const context = useContext(cartContext);

  if (!context) {
    return <MaterialCommunityIcons name="cart" size={size} color={color} />;
  }

  const { Carts } = context;

  return (
    <View style={{ position: 'relative' }}>
      <MaterialCommunityIcons name="cart" size={size} color={color} />
      <View
        style={{
          height: 14,
          width: 14,
          borderRadius: 7,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: -10,
          right: -5,
        }}
      >
        <Text style={{ fontSize: 10, color: 'white', fontWeight: '500' }}>
          {Carts?.length ?? 0}
        </Text>
      </View>
    </View>
  );
};

export type RootTabParamList = {
  Home_Stack: undefined,
  Cart: undefined,
  Orders: undefined,
  Profile: undefined,
}
export type RootStackParamList = {
  Home: undefined,
  Product_Details: { item: ProductDetails }
}
const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()
const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product_Details" component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}
const App = (): React.JSX.Element => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E'
        }}
          // initialRouteName="Home_Stack"
        >
          <Tab.Screen name="Home_Stack" component={MyHomeStack} options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Entypo name="home" size={size} color={color} />
            }
          }} />
          <Tab.Screen name="Orders" component={HomeScreen} options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <MaterialIcons name="reorder" size={size} color={color} />
            }
          }} />

          <Tab.Screen name="Cart" component={CartScreen} options={{
              tabBarIcon: ({ focused, color, size }) => {
                return  <CartTabIcon color={color} size={size} />
              }
            }}
          />


          <Tab.Screen name="Profile" component={HomeScreen} options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <FontAwesome6 name="user" size={size} color={color} />
            }
          }} />

        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})