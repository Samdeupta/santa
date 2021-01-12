import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class SignupScreen extends React.Component{

  constructor(){
    super();

    this.state={
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNo: "",
      confirmPassword: ""
    }
  }

  userSignup=(email,password)=>{
    console.log("Work")
    // if(password != confirmPassword){
    //   return Alert.alert("Password does not match")
    // }
    //  else{
      firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
        db.collection("users").add({
          firstName: "this.state.firstName"
      //     lastName: this.state.lastName,
      //     contact: this.state.phoneNo,
      //     email: this.state.email,
      //     address: this.state.address
         })
      //   return Alert.alert("User added succesfully")
       })
      // .catch((error)=>{
      //   var errorCode= error.code;
      //   var errorMsg= error.message;
      //   return Alert.alert(errorMsg);
      //})
    //}
  }
  
  render(){
    return(
      <View>
        <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Signup', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>
        
        <KeyboardAvoidingView
          style={{flex: 1,justifyContent: 'center',paddingTop: 10,alignItems: 'center'}}>
          <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        onChangeText= {(text)=>{
          this.setState({email:text});
        }} 
        value= {this.state.email}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText= {(text)=>{
          this.setState({password:text});
        }} 
        value= {this.state.password}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText= {(text)=>{
          this.setState({confirmPassword:text});
        }} 
        value= {this.state.confirmPassword}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="First Name"
        onChangeText= {(text)=>{
          this.setState({firstName:text});
        }} 
        value= {this.state.firstName}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="Last Name"
        onChangeText= {(text)=>{
          this.setState({lastName:text});
        }} 
        value= {this.state.lastName}/>

        <TextInput
        style={styles.inputStyle}
        placeholder="Phone No."
        onChangeText= {(text)=>{
          this.setState({phoneNo:text});
        }} 
        value= {this.state.phoneNo}/>

        <TextInput
        style={styles.inputStyle}
         multiline
        numberOfLines={8}
        placeholder="Address"
        onChangeText= {(text)=>{
          this.setState({address:text});
        }} 
        value= {this.state.address}/>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
          this.userSignup("sem","mem")
        }}
        >
        <Text style={styles.textStyle}>SIGNUP</Text>
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