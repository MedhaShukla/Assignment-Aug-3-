import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';


export default class Profile extends Component {

    render() {

        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, backgroundColor: '#9C27B0' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>My Profile</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: 'https://img.timesnownews.com/story/1526453615-anush.jpg?d=600x450' }} style={{ width: 50, height: 50, borderRadius: 25, top: 0, position: 'absolute', zIndex: -1 }} />
                    </View>
                </View>

                <View style={{ flex: 5, margin: 10, backgroundColor: 'white', borderColor: 'white', borderWidth: 4, width: 380, height: 250, left: 5, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', borderBottomWidth: 3, borderBottomColor: '#F0F0F0' }}>
                        <Text>Name</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <TextInput style={{ borderBottomWidth: 2, width: 280 }}
                                    placeholder="" />
                            </View>
                            <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ borderRadius: 27, width: 50, height: 50, backgroundColor: '#6A1B9A', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 10,margin:3, width: 350, height: 90, borderBottomWidth: 3, borderBottomColor: '#F0F0F0' }}>
                        <Text>Contact No</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={{ borderBottomWidth: 2, width: 280 }}
                                placeholder="" />
                            <TouchableOpacity style={{ borderRadius: 27, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#6A1B9A' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: 10,margin:3, width: 350, height: 90, borderBottomWidth: 3, borderBottomColor: '#F0F0F0' }}>
                        <Text>Email.id</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={{ borderBottomWidth: 2, width: 280 }}
                                placeholder="" />
                            <TouchableOpacity style={{ borderRadius: 27, width: 50, backgroundColor: '#6A1B9A', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>OK</Text>
                                <Image source={{uri:''}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}