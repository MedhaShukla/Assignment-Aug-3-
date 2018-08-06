import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class Front extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.text}>React Native World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})