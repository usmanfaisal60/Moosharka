import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import constants from '../../../constants';

const CustomHeader = props => {

    const {
        container,
        titleStyle,
        left,
        right,
        leftIconStyle,
        leftTouchContainer
    } = Styles;

    const {
        children,
        onPressLeft,
        backbutton
    } = props;

    return (
        <View style={container}>
            <StatusBar backgroundColor='#222' barStyle='light-content' />
            <View style={left}>
                {backbutton ?
                    <View style={leftTouchContainer}>
                        {Platform.OS === 'android' ?
                            <TouchableNativeFeedback onPress={() => { if (onPressLeft) onPressLeft() }}>
                                <View style={leftTouchContainer}>
                                    <Image style={leftIconStyle} source={require('../../../Assets/Icons/WhiteIcons/back.png')} />
                                </View>
                            </TouchableNativeFeedback>
                            :
                            <TouchableOpacity onPress={() => { if (onPressLeft) onPressLeft() }}>
                                <View style={leftTouchContainer}>
                                    <Image style={leftIconStyle} source={require('../../../Assets/Icons/WhiteIcons/back.png')} />
                                </View>
                            </TouchableOpacity>}
                    </View>
                    : null
                }
            </View>
            <Text style={titleStyle}>{children}</Text>
            <View style={right}>

            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: constants.headerHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#222',
        alignItems: 'flex-end',
        flexDirection: 'row',
        zIndex: 1
    },

    left: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 12,
        alignItems: 'center'
    },

    titleStyle: {
        fontSize: 20,
        color: '#fff',
        flex: 7,
        paddingBottom: 20
    },

    right: {
        flex: 1
    },

    leftIconStyle: {
        width: 20,
        height: 20
    },

    leftTouchContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CustomHeader;