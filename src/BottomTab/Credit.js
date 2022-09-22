import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Credit extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.hometext}>Credit on Flipkart</Text>
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