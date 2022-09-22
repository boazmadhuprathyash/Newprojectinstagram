import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'
export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profiletext}>This is profile page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'yellow',
        alignItems : 'center',
        justifyContent : 'center'
    },profiletext:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    }
})