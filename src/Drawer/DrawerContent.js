import React,{Component} from "react";
import { View, Text, Stylesheet, Image, StyleSheet } from "react-native";
import Home from "./Home";
import Profile from "./Profile";

export default class DrawerContent extends Component {
    render(){
        return(
            
            <View style = {styles.container}>
                <View style = {styles.profileStyle}>
                    <View style = { styles.profileIcon }>
                    <Image style = { styles.profileImage } source = {require('../../assets/name.png')}></Image>
                    </View>
                    <View style = {styles.infoView}>
                        <Text style = { styles.nameText }>BOAZ M PRATHYASH</Text>
                        <Text style = { styles.mailText }>boazboz@gmail.com</Text>
                        <Text style = { styles.mailText }>0987654321</Text>
                    </View>
                </View>
                <Text style = { styles.menu }
                onPress = {()=> this.props.navigation.navigate('Home')}>Home</Text>
                <Text style = { styles.menu }
                onPress = {()=> this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style = {styles.menu}
                onPress = {()=> this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style = {styles.menu}
                onPress = {()=> this.props.navigation.navigate('AboutUs')}>AboutUS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'lightblue'
    },
    menu : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : 10,
        marginTop : 10,
        color : 'black',    
    },
    profileStyle : {
        height : '25%',
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center'
    },
    profileIcon : {
        height : 100,
        width : 100,
        backgroundColor :'#bbbbbb',
        borderRadius : 50,
        marginTop : 7,
        marginLeft : 7,
    },
    infoView : {
        marginLeft : 10,
    },
    profileImage : {
        height : '100%',
        width :'100%',
        borderRadius : 50,
    },
    nameText : {
        color : 'blue',
        fontWeight : 'bold',
    },
    mailText : {
        fontWeight : 'bold',
        color : 'black'
    }
    
})