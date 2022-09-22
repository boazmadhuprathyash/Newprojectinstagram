import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Supercoin extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>Purchase with your Supercoin</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'white',
        alignItems : 'center',
        justifyContent : 'center'
    },hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    }
})