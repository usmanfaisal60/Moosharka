import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booked = props => {

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
        backgroundColor: '#ddd'
    }
});

export default Booked;