import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default class Front extends Component {
    render() {
        return (
            <View style={styles.Container}>
            {/* <Image source={{uri:'https://giphy.com/gifs/423fHUXEhYpry/html5'}} style={{zIndex:-1, width: 350, height: 400, top:0,left:0, right:0}}/> */}
            <View style={{width:350, height: 50, borderRadius:15, borderWidth:2, alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text}>React Native World</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFC107'
    }
})