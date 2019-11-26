import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AddCarCard = props => {

    const {
        container,
        labelStyle,
        inputStyle
    } = Styles;

    const {
        label,
        value,
        onChangeText,
        keyboardType
    } = props;

    return (
        <View style={container}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                style={inputStyle}
                value={value}
                keyboardType={keyboardType ? keyboardType : 'default'}
                onChangeText={onChangeText} />
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    labelStyle: {
        color: '#1565c0',
        fontSize: 18,
        marginLeft: 10
    },

    inputStyle: {
        color: '#222',
        fontSize: 18,
        padding: 0,
        paddingBottom: 2,
        paddingLeft: 5,
        marginTop: 5,
        marginLeft: '7.5%',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    }
});

export default AddCarCard;