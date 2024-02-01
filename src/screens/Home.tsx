import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RootStackParamList} from "../App"
import { Screen } from "react-native-screens";

type HomeProps= NativeStackScreenProps<RootStackParamList,'Home'>

export const Home =({navigation}:HomeProps)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button title="Go to details"
            //onPress={()=> navigation.navigate("Details",{productId:'88'})}
            
           // onPress={()=>navigation.navigate("Details",)}
           onPress={()=> navigation.push('Details',{productId:'88'})}
             />
            <Button
            title='Go to product'
            onPress={()=> navigation.navigate("Product",{productId:'34'})}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black',
    }
})