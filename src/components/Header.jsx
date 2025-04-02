import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const Header = ({isCart}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate("Home_Stack")} style={styles.appIconContainer}>
          {
            isCart ? <IonIcons name='chevron-back' size={28} color={'#E96E6E'}/> 
            :
            <Image source={require("../assets/AppIcon.png")} style={styles.appIcon}/>
          }
        </TouchableOpacity>
        {
          isCart && 
        <Text style={styles.MyCart}>My Cart</Text>
      }
      <Image source={require("../assets/Dp.png")} style={styles.Dp}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
  },
    appIconContainer:{
      backgroundColor: '#fffff',
      height: 44,
      width: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center'
    },
    appIcon:{
        height: 28,
        width: 28,
    },
    Dp:{
      height: 44,
      width: 44,
      borderRadius: 22
    },
    MyCart:{
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black'
    }
})