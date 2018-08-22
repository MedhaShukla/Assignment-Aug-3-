import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            //id: props.id
            //this.props.task
        }
    }
    //
    render() {
        console.log('prps', this.props);
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: 30, padding: 50 }}>
                <View style={{ flex: 1, alignitems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>Updated task</Text>
                    <View style={{ padding: 25, margin: 5, alignItems: 'center', justifyContent: 'center', width: 250, height: 100, borderWidth: 1, }}>
                        <TextInput style={{ width: 250, height: 100 }}
                            placeholder="write here"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>
                    <View style={{margin:5,padding:20, flex: 1, alignItems: 'center', justifyContent: 'center', width: 250 }}>
                        <TouchableOpacity onPress={() => Actions.demo({ headerText: this.state.text, index: this.props.index })} style={{ width: 250, height: 40, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', font: 20 }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}