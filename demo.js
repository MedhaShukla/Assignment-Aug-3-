import React, { Component } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class demo extends Component {
    constructor(props) {
        super(props);
        const list = [
            { name: 'medha', headerText: '' },
            { name: 'drivezy', headerText: '' },
            { name: 'company', headerText: '' },
            { name: 'hello', headerText: '' }
        ];


        const { headerText, index } = props;
        console.log('headerText, index', headerText, index);
        if (index != null && headerText) {
            list[index].headerText = headerText;
        }

        this.state = {
            list,
            editable: false,
            task: "",
            // headerText: (props.headerText) ? props.headerText : 'medha',

        }
    }


    deleteItem(index) {
        const { list } = this.state;
        list.splice(index, 1);
        console.log('', index);
        this.setState({ list: [...list] });
        console.log('med', list);
        // this.setState({
        //     list: this.state.list.filter(index)
        // });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item, index }) => {
                        console.log('index', index);
                        return (
                            <View style={{ borderBottomWidth: 3, margin: 4, backgroundColor: '#FFCDD2', borderBottomColor: 'grey', borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: .5 }}>
                                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1t4M9QKZw2t9oF0LnEzX82-ZzL_neqLk8D7UPIgffiN6MsXS' }} style={{ width: 200, height: 250, borderRadius: 15 }} />
                                </View>

                                <View style={{ flex: .5, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: .2, padding: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ width: 150, height: 40, borderWidth: 1, backgroundColor: 'white' }}
                                            placeholder='Header Text'
                                            onChangeText={(headerText) => this.setState({ headerText: headerText })}
                                            value={item.headerText}
                                        /></View>
                                    <Text>{item.name}</Text>
                                    <View style={{ flex: .2, padding: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                        <TextInput style={{ width: 100, height: 40, borderWidth: 1, backgroundColor: 'white' }}
                                            placeholder="smaller Text"
                                            onChangeText={(text) => this.setState({ task: text })}
                                        />
                                    </View>

                                    <View style={{ padding: 30, flexDirection: 'row' }}>
                                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: .5 }}>
                                            <TouchableOpacity onPress={() => this.deleteItem(index)} style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: '#80CBC4', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'white', fontSize: 15 }}>D</Text></TouchableOpacity>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: .5 }}>
                                            <TouchableOpacity onPress={() => Actions.Edit({ index })} style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: '#FFCC80', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'white', fontSize: 15 }}>E</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        )
    }
}