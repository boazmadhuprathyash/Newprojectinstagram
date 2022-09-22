import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.settingstext}>This is Settings page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'skyblue',
        alignItems : 'center',
        justifyContent : 'center'
    },settingstext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
})