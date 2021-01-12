import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image,TextInput,Alert,FlatList} from 'react-native';
import {Header,ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class DonateScreen extends React.Component{
  constructor(){
    super();

    this.state={
      userId: firebase.auth().currentUser,
      requestedBooks: []
    }
    this.requestPref= null
  }

  getRequestedBooks=()=>{
    this.requestPref= db.collection("requestedBooks").onSnapshot((snapshot)=>{
      var requestedBookList= snapshot.docs.map(document=>document.data());
      this.setState({
        requestedBooks: requestedBookList
      })
    })
  }

  componentDidMount(){
    this.getRequestedBooks()
  }

  componentWillUnmount(){
    this.requestPref
  }

  keyExtractor=(item,index)=> index.toString()
  renderItem=({item,i})=>{
    return(
      <ListItem
      key={i}
      title={item.bookName}
      subtitle={item.duration}
      titleStyle={{color:'black',fontSize:20,fontWeight:'bold'}}
      rightElement={
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={()=>{
          this.props.navigation.navigate('receiverDetail',{'details':item})
        }}>
          <Text
          style={styles.textStyle}>View</Text>
        </TouchableOpacity>
      }
      bottomDivider/>
    )
  }

  render(){
    return(
      <View>
        <Header
        backgroundColor={'#2968c2'}
        centerComponent={{text:'Donate', style:{color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Text Me One'}}}/>

        <View
        style={{flex:1}}>
          {this.state.requestedBooks.length == 0 ? (
            <View
            style={styles.subContainer}>
              <Text
              style={{fontSize:20}}>List of Requested Books</Text>
            </View>
          )
          :(
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.requestedBooks}
            renderItem={this.renderItem}/>
          )}
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize:20,
    justifyContent: 'center',
    alignContent: 'center'
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
    marginLeft:65
  },
  textStyle: {
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold', 
    fontFamily: 'Text Me One'
  }
})