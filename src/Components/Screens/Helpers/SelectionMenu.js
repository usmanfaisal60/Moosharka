import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

const SelectionMenu = props => {

    const {
        mainContainer,
        wrapper,
        menu1,
        menu2,
        imageContainer,
        textContainer,
        imageStyle
    } = Styles;

    const {
        onMapPress,
        onFilterPress
    } = props;

    return (
        <View style={mainContainer}>
            <View style={wrapper}>
                <View style={menu1}>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={() => { if (onMapPress) onMapPress() }} >
                            <View style={{ flex: 1, height: '100%', flexDirection: 'row' }}>
                                <View style={imageContainer}>
                                    <Image style={imageStyle} source={require('../../../Assets/Icons/map.png')} />
                                </View>
                                <View style={textContainer}>
                                    <Text>
                                        Map
                                </Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity onPress={() => { if (onMapPress) onMapPress() }}>
                            <View style={{ flex: 1, height: '100%', flexDirection: 'row' }}>
                                <View style={imageContainer}>
                                    <Image style={imageStyle} source={require('../../../Assets/Icons/map.png')} />
                                </View>
                                <View style={textContainer}>
                                    <Text>
                                        Map
                                </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
                <View style={menu2}>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={() => { if (onFilterPress) onFilterPress() }} >
                            <View style={{ flex: 1, height: '100%', flexDirection: 'row' }}>
                                <View style={imageContainer}>
                                    <Image style={imageStyle} source={require('../../../Assets/Icons/filter.png')} />
                                </View>
                                <View style={textContainer}>
                                    <Text>
                                        Filter
                                    </Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity onPress={() => { if (onFilterPress) onFilterPress() }}>
                            <View style={{ flex: 1, height: '100%', flexDirection: 'row' }}>
                                <View style={imageContainer}>
                                    <Image style={imageStyle} source={require('../../../Assets/Icons/filter.png')} />
                                </View>
                                <View style={textContainer}>
                                    <Text>
                                        Filter
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
};

const wrapperWidth = (Dimensions.get('window').width * 0.5);
const wrapperHeight = (Dimensions.get('window').height * 0.08);


const Styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom: 0,
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapper: {
        elevation: 3,
        width: wrapperWidth,
        height: wrapperHeight,
        borderRadius: wrapperHeight / 2,
        borderWidth: 2,
        borderColor: '#ddd',
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },

    menu1: {
        flex: 1,
        height: '100%',
        borderRightWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row'
    },

    menu2: {
        flex: 1,
        height: '100%',
        borderLeftWidth: 1,
        borderColor: '#bbb',
        flexDirection: 'row'
    },

    imageContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    imageStyle: {
        width: '40%',
        height: '40%'
    }
});

export default SelectionMenu;