import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import {Header} from 'react-native-elements';


export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
 
      <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Book Santa', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{this.props.navigation.navigate('Login')}}
        >
        <Text style={styles.textStyle}>LOGIN</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{this.props.navigation.navigate('Signup')}}>
        <Text style={styles.textStyle}>SIGNUP</Text>
        </TouchableOpacity>  

      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    height:50,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#2968c2',
    alignItems:'center',
    marginTop:20,
    marginLeft:65
  },
  textStyle: {
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One'
  }
});

