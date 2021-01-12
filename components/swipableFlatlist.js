import * as React from 'react';
import {Animated,Dimension,StylSheet,Text,TouchableHighlight,View} from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import db from '../config';
import firebase from 'firebase';

export default class SwipeableFlatList extends React.Component{
  constructor(props){
    super(props);

    this.state={
      allNotifications:this.props.allNotifications
    }
  }

  updateMarkAsRead=notification=>{
    db.collection("All_notifications").doc(notification.doc_id).update({
      notification_status:"red"
    })
  }

  onSwipe=swipeData=>{
    var allNotifications=this.state.allNotifications;
    const{key,value}=swipeData;
    if(value < -Dimension.get("Window").width){
      const newdata=[...allNotifications];
      this.updateMarkAsRead(allNotifications[key]);
      newdata.slice(key,1);
      this.setState({allNotifications:newdata});
    }
  }

  renderItem=data=>{
    <Animated.View>
      <ListItem
      title={data.item.bookName}
      titleStyle={{color:'black',fontWeight:'bols'}}
      bottomDivider/>
    </Animated.View>
  }
}