import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Activity = props => {

    const {
        container
    } = Styles;

    return (
        <View style={container}>

        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
});

export default Activity;