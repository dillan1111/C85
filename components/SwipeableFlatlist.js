import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {ListItem, Item} from 'react-native-elements'
import {SwipeListView} from 'react-native-swipe-list-view'
import firebase from 'firebase'
import db from '../config'

export default class SwipeableFlatlist extends Component{
    constructor(props){
        super(props);
        this.state={
            allNotifications: this.props.allNotifications
        }
    }

    onSwipeValueChange = swipeData => {
        var allNotifications = this.state.allNotifications;
        const { key, value } = swipeData;
        if (value < -Dimensions.get('window').width ) {
            const newData = [...allNotifications];
            const prevIndex = allNotifications.findIndex(item => item.key === key);
            this.updateMarkAsread(allNotifications[key])
            newData.splice(prevIndex, 1);
            this.setState({allNotifications: newData})   
        }
    }

    updateMarkAsread=(notification)=>{
        db.collection('all_notifications').doc(notification.doc_id).update({
            "notification_status": "read"
        })
    }

    renderItem=(data)=>{
        <ListItem bottomDivider> 
            <Icon name="book" type="font-awesome" color ='#696969'/>
            <ListItem.Content> 
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}> {data.book_name} </ListItem.Title> 
                <ListItem.Subtitle> {data.message} </ListItem.Subtitle> 
            </ListItem.Content> 
        </ListItem>
    }

    renderHiddenItem = () => {
        <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
    }
    render(){
        return(
            <View style={styles.container}>
                <SwipeListView
                disableRightSwipe
                data={this.state.allNotification}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get('window').width}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={this.onSwipeValueChange}
                useNativeDriver={false}/>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});