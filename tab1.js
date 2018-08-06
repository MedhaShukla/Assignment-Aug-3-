import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Tab1 extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.text} onPress={()=> Actions.Tabscene()}>Hello Tabs</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    }
})