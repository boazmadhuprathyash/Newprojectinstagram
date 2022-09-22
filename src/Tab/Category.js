import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    FlatList
}from 'react-native'
import axios from "axios";
export default class Category extends Component{

    constructor(){
        super();
        this.state = {
            loader : false,
            DATA : []
        }
    }

getData(){
    this.setState({})
    fetch ('https://api.sampleapis.com/coffee/hot')
    .then((response) => response.json())
    .then((response) => {
        if(response.length>0){
            this.setState({DATA : response})
        }
        this.setState({ loader : false })
        console.log ( 'YOUR RESPONSE IS', response)
    })
    .catch((error) => {
        this.setState({ loader : false })
        // console.log ('ERROR IS', error)
    })
}

getAxiosData(){
    this.setState({ loader : true })
    axios.get('https://api.sampleapis.com/coffee/hot')
    .then((response) => {
        this.setState({ loader : false })
        console.log('AXIOS : RESPONSE',response)
    })
    .catch((error) =>{
        this.setState({ loader : false })
        console.log('AXIOS : ERROR',error)
    })
}

componentDidMount(){
    this.getData()
}

    render(){
        const renderItem = ({item}) => (
            <View style = { styles.itemContainer }>
                <Text style = { styles.itemText }>{item.title}</Text>
                <Text style = { styles.itemDescription }>{item.description}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size = {30} color = 'blue' animating = {this.state.loader}/>
                <Text style={styles.hometext}
                onPress = {() => this.getAxiosData()}>This is Category List</Text>
                <FlatList style = {{width : '95%', marginTop : 10}}
                data = {this.state.DATA}
                renderItem = { renderItem }/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        height :'100%' ,
        width : '100%',
        backgroundColor :'#eeeeee',
        alignItems : 'center',
        justifyContent : 'center'
    },hometext:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'
    },
    itemContainer : {
        width : '100%',
        padding : 10,
        backgroundColor : '#ffffff',
        elevation : 4,
        marginBottom : 10,
    },
    itemText : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'black',
    },
    itemDescription : {
        fontSize : 14,
        fontWeight : 'bold',
        color : 'orange'
    }
})