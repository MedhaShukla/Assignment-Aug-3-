import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <View style={{ flex: 1, margin:10 }}>
                <View style={{ flex:.05,padding: 25, alignItems: 'center', justifyContent: 'center', width: 200, height: 20 , borderWidth: 1, }}>
                <Text style={{color: 'blue', fontSize: 25}}>updated task</Text>
                    <TextInput style={{ width: 250, height: 40 }}
                        placeholder=""
                        onChangeText={(text) => this.setstate({ text })}
                        //value={this.props.task}
                    />
                </View>
            </View>
        )
    }}