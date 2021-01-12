import * as React from 'react';
import {StyleSheet,View,Text,Touchableopacity} from 'react-native';
import DrawerItems from 'react-navigation-drawer';
import db from '../config';
import firebase from 'firebase';

export default class SideBar extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        
        <View style={styles.logoutContainer}>
          <Touchableopacity
          style={styles.logoutButton}
          onPress={()=>{
            this.props.navigation.navigate('Home')
            firebase.auth().signOut()
          }}>
            <Text style={styles.textStyle}>Logout</Text>
          </Touchableopacity>
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  drawerItemsContainer:{
    flex:0.8
  },
  logoutContainer:{
    fles:0.2,
    justifyContent:'flex-end',
    paddingBottom:20
  },
  logoutButton:{
    width: 50,
    height:12.5,
    borderRadius:10,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#2968c2',
    alignItems:'center',
    marginTop:20,
    marginLeft:50,
    padding: 10
  },
  textStyle:{
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One'
  }
})
