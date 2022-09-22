import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style = {styles.namestyle}>Hi my Name is {this.props.name}</Text>
            </View>
        )
    }
}

export default class flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_text: 'flipkart',
            sub_text: 'welcomes',
            sub_text2: 'you'
        }
    }

    componentDidMount(){
        console.log('the name is :',this.props.route.params.username)
    }

    updateText(){
        this.setState({
            main_text: 'welcome(flipkart updated)',
            sub_text:'to(welcomes updated)',
            sub_text2:'Instgram(you updated)'
        })
    }

    render(){
        return(
            <View style= {styles.box}>
                <Text style = {styles.text}>{this.state.main_text}</Text>
                <Text style = {styles.text}>{this.state.sub_text}</Text>
                <Text style = {styles.text}>{this.state.sub_text2}</Text>
                <TouchableHighlight style = {styles.button}
                underlayColor = 'blue'
                onPress = {()=>this.updateText()}>
                    <Text style = {styles.buttontext}>UPDATE</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {styles.button}
                underlayColor = 'blue'
                onPress={()=> this.props.navigation.navigate('Drawer')}>
                    <Text style = {styles.buttontext}>CLICK HERE</Text>    
                </TouchableHighlight>
                <FlexContent name = {this.props.route.params.username}>
                </FlexContent>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight:'bold'
    },
    button: {
        width: '60%',
        height: 55,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 6,
        marginTop: 20
    },
    buttontext: {
        color: 'blue',
        fontWeight:'bold'
    },
    namestyle: {
        fontSize: 22,
        color:'yellow',
        fontWeight:'bold',
        marginTop:20
    }
})