import React, { Component } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ name:'medha',id:1 },
            { name:'drivezy', id:2 },
            { name:'company', id:3},
            { name:'hello', id:4}],
            editable: false, 
            task: ""
        }
    }
    /*
    removeItem(id) {
        this.setState({
            list: this.state.list.filter((x, i) => i != id)
        })
        let list = this.state.list.map((x, i) => <list remove={this.removeItem.bind(this, i)} />)
    }*/deletetodo =(index) =>{
        for(var i=0; i< this.state.list.length; i++){
            if(this.state.list[i]== v){
                delete this.state.list[i]
            }}
            this.setState({
                list:this.state.list
            })
        console.log(this.state.value)
 }

    render() {
        return (
            <View style={{ flex: 1, borderRadius: 35 }}>
                <FlatList
                    data={this.state.list}
                    renderItem={(item, id) => {
                        return (
                            <View style={{ flexDirection: 'row', borderWidth: 2, boderRadius: 25, padding: 10 }}>
                                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
                                    <Image source={{ uri: 'https://cdn-images-1.medium.com/max/842/1*WNvkgEITG7S3J0uU2tK7Jg.jpeg' }} style={{ width: 200, height: 300 }} />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: .1, padding: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                        <View style={{ width: 150, height: 40, borderWidth: 1 }}><Text>Header Text</Text></View>
                                        {/*<TextInput style={{ width: 150, height: 40 , borderWidth: 1}}
                                            placeholder="Header Text"
                                            onChangeText={(text)=> this.setState({text})}
                                        />*/}
                                        <TextInput style={{ width: 150, height: 40, borderWidth: 1 }}
                                            placeholder="smaller Text"
                                            onChangeText={(text) => this.setState({ task: text })}

                                        />
                                    </View>
                                    <View style={{ padding: 20, flexDirection: 'row' }}>
                                        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
                                            <TouchableOpacity onPress={() => this.deleteItem(index)} style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 15 }}>D</Text></TouchableOpacity>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1 }}>
                                            <TouchableOpacity onPress={() => Actions.edit(this.state.task)} style={{ borderRadius: 30, width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 15 }}>E</Text></TouchableOpacity>
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