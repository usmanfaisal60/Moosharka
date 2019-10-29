import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SelectionMenu = props => {

    const {
        container,
        wrapper
    } = Styles;

    return (
        <View style={container}>
            <View style={wrapper}>

            </View>
        </View>
    )
};

const wrapperWidth = (Dimensions.get('window').width * 0.5);
const wrapperHeight = (Dimensions.get('window').height * 0.08);


const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom: 0,
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapper: {
        width: wrapperWidth,
        height: wrapperHeight,
        borderRadius: wrapperHeight / 2,
        borderWidth: 2,
        borderColor: '#bbb',
        overflow: 'hidden',
        flexDirection: 'row'
    }
});

export default SelectionMenu;