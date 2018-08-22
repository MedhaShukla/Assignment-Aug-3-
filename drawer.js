import React, { Component } from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class drawer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <View style={{ flex: 1, margin:5,padding: 20}}>
                <View style={{ padding: 10,margin:4,borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center' , flex:.02}}>
                    <TouchableOpacity onPress={() => Actions.demo()}>
                    <Image source={{uri:'https://cdn1.vectorstock.com/i/1000x1000/93/30/flat-home-icon-house-sign-web-internet-button-vector-13229330.jpg'}}/>
                        <Text style={{ fontSize: 25, color: 'black' }}>Home</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center',padding:20, flex:.02,flexDirection: 'row' }}>
                    <TouchableOpacity style={{flexDirection: 'row'}}onPress={() => Actions.Profile()}>
                   <View style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                    <Image style={{ width: 32, height: 32 }} source={{ uri: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/default-avatar-profile-icon-vector-18942370.jpg' }}/></View>
                     <Text style={{ fontSize: 25, color: 'black' }}>Profile</Text>
                    </TouchableOpacity></View>
                    <View style={{ borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center' , padding: 20,flex:.02}}>
                    <TouchableOpacity onPress={() => Actions.Tab1()}>
                        <Text style={{ fontSize: 25, color: 'black' }}>TabScene</Text>
                    </TouchableOpacity>
                </View>
            </View>



        )
    }
}   