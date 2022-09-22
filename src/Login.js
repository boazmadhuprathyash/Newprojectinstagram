import React,{Component} from "react";
import{
      View,
      StyleSheet,
      ImageBackground,
      Image,
      TextInput,
      TouchableHighlight,
      Text
}from 'react-native' 


export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      name : null
    }
  }

  updateValue(username){
    // console.log(username)
    this.setState({name : username})

  }

      render(){
        return(
          <View style= {styles.phone} >
            <ImageBackground source={require('../assets/bluebackground.png')}
              style= {styles.imagebg}>
                <Image source = {require('../assets/flipkartlogo.png')}
                  style = {styles.Imagestyle}>
                </Image>
                <TextInput style = {styles.inputview}
                placeholder = 'username'
                placeholderTextColor={'white'}
                onChangeText = {(username)=> this.updateValue(username)}>
                  </TextInput>
                  <TextInput style = {styles.inputview}
                  placeholder = 'E-mail'
                  placeholderTextColor={'white'}>
                    </TextInput>
                    <TextInput style = {styles.inputview}
                    placeholder="Mobile no"
                    placeholderTextColor={'white'}
                    keyboardType='numeric'>
                    </TextInput>
                    <TextInput style = {styles.inputview}
                    placeholder="Pincode"
                    placeholderTextColor={'white'}
                    keyboardType='numeric'>
                    </TextInput>
                    <TextInput style = {styles.inputview}
                    placeholder="Password"
                    placeholderTextColor={'white'}
                    secureTextEntry={true}>
                    </TextInput>
                    <TouchableHighlight style = {styles.buttonview}
                    underlayColor = 'white'
                    onPress = { ()=> this.props.navigation.navigate('Drawer',{username : this.state.name})}>
                      <Text style = {styles.buttontext}>login</Text></TouchableHighlight>
                      </ImageBackground>
                      </View>
        )
      }
}


const styles = StyleSheet.create({
     phone : {
       height : '100%',
       width : '100%',
       backgroundColor:'#ffffff'

     },
     imagebg :{
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start'
     },
     Imagestyle : {
      height : 70,
      width : 70,
      marginBottom : 30
     },
    inputview :{
      width: '80%',
      height: 55,
      borderWidth: 1,
      borderColor: 'white',
      alignItems:'center',
      justifyContent:'center',
      padding: 20,
      marginBottom: 20,
      fontSize: 15
    },

    buttonview :{
      width: '80%',
      height: 50,
      backgroundColor: 'yellow',
      marginTop: 10,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center"

    },
    buttontext : {
      fontSize : 20,
      fontWeight: 'bold',
      color: 'blue'
    }
})