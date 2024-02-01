import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp,NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { Details } from './Details'

type ProductProps= NativeStackScreenProps<RootStackParamList,'Product'>

const Product = ({route}:ProductProps) => {
    const {productId}=route.params
    const navigation= useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
        <Text style={styles.smallText}>Product</Text>
        <Button
        title='Go to details'
        onPress={()=> navigation.navigate("Details",{productId:'34'})}
        />
        <Button
        title='Go to home'
        onPress={()=> navigation.popToTop()}
        />
        </View>
    )
}

export default Product
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black',
    }
})