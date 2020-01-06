import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import constants from '../../../constants';
import Aux from '../../HOC/Auxiliary';

const SeacrhHeader = props => {

    const {
        container,
        textStyle,
        left,
        center,
        searchContainer,
        iconStyle,
        leftTouchContainer,
        leftIconStyle
    } = Styles;

    const {
        keyword,
        expanded,
        onChangeText,
        onPressLeft,
        onTextTouch
    } = props;

    return (
        <View style={{ ...container, height: expanded ? constants.searchHeaderHeight : constants.headerHeight }}>
            <View style={{ ...left, paddingBottom: expanded ? 50 : 12 }}>
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
            </View>
            <View style={center}>
                <View style={searchContainer}>
                    <Image style={iconStyle} source={require('../../../Assets/Icons/WhiteIcons/loc.png')} />
                    <TextInput
                        onFocus={onTextTouch}
                        style={textStyle}
                        value={keyword}
                        onChangeText={(text) => { if (onChangeText) onChangeText(text) }} />
                </View>
                {expanded ?
                    <Aux>
                        <View style={searchContainer}>
                            <Image style={iconStyle} source={require('../../../Assets/Icons/WhiteIcons/calender.png')} />
                            <TouchableWithoutFeedback onPress={onTextTouch}>
                                <Text style={textStyle}>Select from date</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={searchContainer}>
                            <Image style={iconStyle} source={require('../../../Assets/Icons/WhiteIcons/calender.png')} />
                            <TouchableWithoutFeedback>
                                <Text style={textStyle}>Select to date</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </Aux>
                    :
                    null}
            </View>
        </View>
    )
};



const Styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#222',
        flexDirection: 'row',
    },

    textStyle: {
        color: '#fff',
        padding: 0,
        paddingHorizontal: 5,
        flex: 1
    },

    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    center: {
        flex: 7,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },

    searchContainer: {
        width: '90%',
        backgroundColor: '#000',
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconStyle: {
        width: 30,
        height: 30,
    },

    backIconStyle: {
        width: 20,
        height: 20,
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

export default SeacrhHeader;