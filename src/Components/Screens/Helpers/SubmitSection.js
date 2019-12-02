import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubmitSection = props => {

    const {
        container,
        buttonStyle,
        buttonText
    } = Styles;

    console.log(props);

    return (
        <View style={container}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={container}>
                <View style={buttonStyle}>
                    <Text style={buttonText}>Submit Car</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        width: '70%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3
    },

    buttonText: {
        fontSize: 18
    }
});

export default SubmitSection;