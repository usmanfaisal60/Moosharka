import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Template = props => {

    const {
        container,
        titleStyle,
        left
    } = Styles;

    const {
        children
    } = props;

    return (
        <View style={container}>
            <StatusBar backgroundColor='#222' barStyle='light-content'/>
            <View style={left}>

            </View>
            <Text style={titleStyle}>{children}</Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#222',
        alignItems: 'center',
        flexDirection: 'row'
    },

    left: {
        flex: 1
    },

    titleStyle: {
        fontSize: 20,
        color: '#fff',
        flex: 10
    }
});

export default Template;