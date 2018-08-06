import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Dimentions } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class TabScene extends Component {

    onPress() {
        alert('Tabs are here');
    }
    render() {
        //let screenWidth = Dimentions.get('window').width;
    
        return (
            <ScrollView horizontal={true}>
            <View style={{ flex: .5, padding: 10 , flexDirection: 'row'}}>
    
                    <View style={{ width: 150, height: 40, borderWidth: 2 }}>
                        <TouchableOpacity style={{ width: 300, height: 40, backgroundColor: '#9C27B0' }} onPress={() => Actions.Tab1()}>
                            <Text style={{ color: 'black', fontSize: 20 }}>Tab1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 150, height: 40, borderWidth: 2, backgroundColor: '#9C27B0' }}>
                        <TouchableOpacity style={{ width: 300, height: 40 }} onPress={() => Actions.Tab2()}>
                            <Text style={{ color: 'black', fontSize: 20 }}>Tab2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 150, height: 40, borderWidth: 2, backgroundColor: '#9C27B0' }}>
                        <TouchableOpacity style={{ width: 300, height: 40 }} onPress={() => Actions.Tab3()}>
                            <Text style={{ color: 'black', fontSize: 20 }}>Tab3</Text></TouchableOpacity>
                    </View>
                </View>

    
            </ScrollView>
        )
    }
}