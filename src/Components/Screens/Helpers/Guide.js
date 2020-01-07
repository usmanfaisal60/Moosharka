import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const height = Platform.OS === 'android' ? (ExtraDimensions.getSoftMenuBarHeight() !== 0 ? ExtraDimensions.getRealWindowHeight() - ExtraDimensions.getStatusBarHeight() - ExtraDimensions.getSoftMenuBarHeight() : Dimensions.get('window').height - StatusBar.currentHeight) : Dimensions.get('window').height;

const Guide = props => {

    const {
        outerContainer,
        mainContainer,
        imageContainer,
        textContainer,
        guideText,
        guideTextContainer,
        buttonsContainer,
        buttonStyle
    } = Styles;

    const {
        nextPage,
        onCrossPress
    } = props;

    return (
        <View style={outerContainer}>
            <View style={mainContainer}>
                <View style={imageContainer}>
                    <Image
                        resizeMode='cover'
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../../Assets/AddCarLogos/listcar.jpg')} />
                </View>
                <View style={textContainer}>
                    <Text style={guideText}>
                        Guide to list your car
                    </Text>
                    <Text>
                        This guide will walk you through the process of listing your car
                    </Text>
                    <View style={guideTextContainer}>
                        <Text >
                            ► We will ask you a series of simple questions
                        </Text>
                        <Text >
                            ► Read the question carefully before answering
                        </Text>
                        <Text >
                            ► You can edit your car's details but once submitted, you can not change the details
                        </Text>
                    </View>
                </View>
                <View style={buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => onCrossPress()}
                        activeOpacity={0.9}
                        style={buttonStyle}>
                        <Image
                            resizeMode='cover'
                            style={{ width: '50%', height: '50%' }}
                            source={require('../../../Assets/Icons/WhiteIcons/cross.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => nextPage()}
                        activeOpacity={0.9}
                        style={buttonStyle}>
                        <Image
                            resizeMode='cover'
                            style={{ width: '50%', height: '50%' }}
                            source={require('../../../Assets/AddCarLogos/next.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#fff',
        padding: 10
    },

    mainContainer: {
        width: '100%',
        height: height - constants.headerHeight - 20,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 }
    },

    imageContainer: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        overflow: 'hidden',
        flex: 1,
    },

    textContainer: {
        flex: 1,
        margin: 20,
    },

    guideText: {
        fontSize: 22,
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },

    guideTextContainer: {
        marginTop: 10,
        flex: 1,
        paddingLeft: 10
    },

    buttonsContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    buttonStyle: {
        width: 60,
        height: 60,
        borderRadius: 40,
        elevation: 2,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Guide;