import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet, Platform, TouchableOpacity } from 'react-native';

const CustomListItem = props => {

    const {
        container,
        description,
        containerWithBorder
    } = Styles;

    const {
        children,
        bottomBorder,
        onPress
    } = props;

    return (
        Platform.OS === 'android' ?
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#fff')}
                onPress={() => { if (onPress) onPress() }}>
                <View style={!bottomBorder ? container : containerWithBorder}>
                    <Text style={description}>{children}</Text>
                </View>
            </TouchableNativeFeedback>
            :
            <TouchableOpacity
                background={TouchableNativeFeedback.Ripple('#fff')}
                onPress={() => { if (onPress) onPress() }}>
                <View style={!bottomBorder ? container : containerWithBorder}>
                    <Text style={description}>{children}</Text>
                </View>
            </TouchableOpacity>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20
    },

    containerWithBorder: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },

    description: {
        color: '#fff',
        fontSize: 16
    }
});

export default CustomListItem;