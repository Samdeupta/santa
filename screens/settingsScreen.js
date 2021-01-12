import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,Alert,ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import ReactModal from 'react-modal';

export default class SettingsScreen extends React.Component{
  constructor(){
    super();

    this.state={
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNo: "",
      docId: ""
    }
  }

  getUserDetails=()=>{
    var email= firebase.auth().currentUser//.email;
    db.collection('users').where('email','==',email).get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
        var data= doc.data()
        this.setState({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phoneNo: data.phoneNo,
          docId: doc.id,
          isModalVisible: false
        })
      })
      
    })
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId).update({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phoneNo: this.state.phoneNo
    })
  }

  edit(){
    
  }

  componentDidMount(){
    this.getUserDetails();
  }
  render(){
    return(
      <View> 
        <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Settings', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>

        <Text
        style={styles.textStyle}>
        First Name:  {this.state.firstName}</Text>

        <Text
        style={styles.textStyle}>
        Last Name:  {this.state.lastName}</Text>

        <Text
        style={styles.textStyle}>
        Address:  {this.state.address}</Text>

        <Text
        style={styles.textStyle}>
        Phone No.:  {this.state.phoneNo}</Text>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
          this.setState({isModalVisible:true})
        }}>
          <Text style={styles.textStyle2}>Edit</Text>
        </TouchableOpacity>

        <ReactModal
        isOpen={this.state.isModalVisible}>
          <KeyboardAvoidingView
          style={{flex: 1,justifyContent: 'center',paddingTop: 10,alignItems: 'center'}}>

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
          this.setState({isModalVisible:false})
          this.updateUserDetails()
        }}
        >
        <Text style={styles.textStyle2}>CONFIRM</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </ReactModal>
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
    color: 'black', 
    fontSize: 25, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One',
    marginTop:5,
    marginLeft:5
  },
  textStyle2: {
    color: 'white', 
    fontSize: 25, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One',
    marginTop:5,
    marginLeft:5
  }
})