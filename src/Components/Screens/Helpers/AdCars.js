import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdCard = props => {

    const {
        container,
        titleStyle,
        description
    } = Styles;

    const {
        title,
        children
    } = props;

    return (
        <View style={container}>
            <Text style={titleStyle}>
                {title}
            </Text>
            <Text style={description}>
                {children}
            </Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    titleStyle: {
        color: '#fff',
        fontSize: 20,
        padding: 5
    },

    description: {
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 20
    },

    container: {
        width: '80%',
        alignItems: 'center'
    }
});

export default AdCard;