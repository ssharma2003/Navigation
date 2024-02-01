import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'


type DetailProps= NativeStackScreenProps<RootStackParamList,'Details'>

export const Details = ({route}:DetailProps) => {
  const {productId}=route.params

  const navigation= useNavigation <NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
      <Button title='Go to Home'
       onPress={()=> navigation.navigate("Home")}/>
       <Button 
        title='Go to product'
        onPress={()=> navigation.navigate("Product",{productId:'34'})}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black',
    },
   
})