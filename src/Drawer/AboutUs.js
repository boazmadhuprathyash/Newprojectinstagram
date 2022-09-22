import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class AboutUs extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.aboutUstext}>This is AboutUs page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'lightblue',
        alignItems : 'center',
        justifyContent : 'center'
    },aboutUstext:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    }
})