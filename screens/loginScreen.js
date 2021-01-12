import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{

  constructor(){
    super();

    this.state={
      email: "",
      password: ""
    }
  }

  userLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      this.props.navigation.navigate('Request')
    })
    .catch((error)=>{
        var errorCode= error.code;
        var errorMsg= error.message;
        return Alert.alert(errorMsg);
    })
  }

  render(){
    return(
      <View>
        <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Login', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>
        
        <KeyboardAvoidingView
          style={{flex: 1,justifyContent: 'center',paddingTop: 10,alignItems: 'center'}}>
          <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        onChangeText= {(text)=>{
          this.setState({email:text});
        }} 
        value= {this.state.text}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText= {(text)=>{
          this.setState({password:text});
        }} 
        value= {this.state.text}/>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
          this.userLogin(this.state.email,this.state.password)
        }}
        >
        <Text style={styles.textStyle}>LOGIN</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
  
      </View>
    )
  }
}

const styles= StyleSheet.create({
  inputStyle: {
    width: 250,
    height: 60,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 40,
    paddingHorizontal: 10
  },
  buttonStyle: {
    width: 200,
    height:50,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#2968c2',
    alignItems:'center',
    marginTop:20,
    marginLeft:50,
    padding: 10
  },
  textStyle: {
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One'
  }
})