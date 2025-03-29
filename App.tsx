import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

type RootTabParamList = {
  Home: undefined,
  Cart: undefined,
  Orders: undefined,
  Profile: undefined,
}
const Tab = createBottomTabNavigator<RootTabParamList>()

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E96E6E'
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }} />
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="reorder" size={size} color={color} />
          }
        }} />
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialCommunityIcons name="cart" size={size} color={color} />
          }
        }} />
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome6 name="user" size={size} color={color} />
          }
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})