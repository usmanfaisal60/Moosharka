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
        children,
        left
    } = props;

    return (
        <View style={{ ...container, alignItems: left ? 'flex-start' : 'center' }}>
            {title ?
                <Text style={titleStyle}>
                    {title}
                </Text>
                :
                null}
            <Text style={{ ...description, textAlign: left ? 'left' : 'center' }}>
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
        paddingBottom: 20
    },

    container: {
        width: '80%',
    }
});

export default AdCard;