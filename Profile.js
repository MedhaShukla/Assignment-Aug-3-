import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#9C27B0' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontSize: 20, color: 'white' }}>My Profile</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <Image source={{ uri: 'https://img.timesnownews.com/story/1526453615-anush.jpg?d=600x450' }}  style={{ width: 50, height: 50, borderRadius: 25, top: 0,right: 0, left: 0,position: 'relative' }} />
                    </View>
                </View>
                <View style={{ flex: 5, padding: 15}}>
                    <Text>Name</Text>
                    <View style={{ flexDirection: 'row' , padding: 10}}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <TextInput style={{ borderBottomWidth: 2, width: 300 }}
                                placeholder=""
                            /></View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}><TouchableOpacity style={{ borderRadius: 27, width: 50,height: 50, backgroundColor: '#6A1B9A', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text></TouchableOpacity></View>
                    </View>
                    <View style={{padding: 10}}>
                    <Text>Contact No</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={{ borderBottomWidth: 2, width: 300 }}
                            placeholder=""/>
                            <TouchableOpacity style={{ borderRadius: 27, width: 50,alignItems: 'center',justifyContent: 'center' ,backgroundColor: '#6A1B9A'}}><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text></TouchableOpacity></View>
                    </View>
                    <View style={{padding: 10}}>
                    <Text>Email.id</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={{ borderBottomWidth: 2, width: 300 }}
                            placeholder=""

                        />
                        <TouchableOpacity style={{ borderRadius: 27, width: 50, backgroundColor: '#6A1B9A', alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text></TouchableOpacity></View>
                </View></View>
            </View>
        )
    }
}