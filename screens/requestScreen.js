import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class RequestScreen extends React.Component{
  constructor(){
    super();

    this.state={
      userId: firebase.auth().currentUser.email,
      bookName:"",
      duration: "",
    }
  }

  generateBookId(){
    return Math.random().toString(36).substring(7)
  }

  addRequest=(bookName,duration)=>{
    var user_id= this.state.userId;
    var request_id= this.generateNookId();
    db.collection('requestedBooks').add({
      "user_id":user_id,
      "bookName":bookName,
      "duration":duration,
      "request_id": request_id
    })

    this.setState({
      bookName:"",
      duration:""
    })

    return Alert.alert("Request has been sent")  
  }
  
  render(){
    return(
      <View
      style={{flex:1}}>
        <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Request', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>

        <KeyboardAvoidingView
          style={{flex: 1,justifyContent: 'center',paddingTop: 10,alignItems: 'center'}}>
          <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        onChangeText= {(text)=>{
          this.setState({bookName:text});
        }} 
        value= {this.state.bookName}/>

        <TextInput
        style={styles.inputStyle}
        multiline
        numberOfLines={8}
        placeholder="Duration"
        onChangeText= {(text)=>{
          this.setState({duration:text});
        }} 
        value= {this.state.duration}/>
        
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{this.addRequest(this.state.bookName,this.state.duration)}}
        >
        <Text style={styles.textStyle}>REQUEST</Text>
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