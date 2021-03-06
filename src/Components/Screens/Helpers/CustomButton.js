import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet, TouchableOpacity, Platform } from 'react-native';

const CustomButton = props => {

    const {
        container,
        buttonContainer,
        description,
        buttonContainerTransparent,
        buttonContainerBlue,
        buttonContainerBlack
    } = Styles;

    const {
        children,
        onPress,
        transparent,
        blue,
        black
    } = props;

    return (
        <View style={container}>
            <View style={{ marginTop: 20, alignSelf: 'center', width: '95%', overflow: 'hidden' }}>
                {Platform.OS === 'android' ?
                    <TouchableNativeFeedback
                        style={{ flex: 1 }}
                        onPress={() => { if (onPress) onPress() }}
                        background={transparent ? TouchableNativeFeedback.Ripple('#fff2') : TouchableNativeFeedback.Ripple('#0002')}>
                        <View style={transparent ?
                            buttonContainerTransparent
                            : blue ?
                                buttonContainerBlue
                                : black ?
                                    buttonContainerBlack
                                    : buttonContainer}>
                            <Text style={{ ...description, color: '#fff' }}>
                                {children}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    :
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { if (onPress) onPress() }}>
                        <View style={transparent ?
                            buttonContainerTransparent
                            : blue ?
                                buttonContainerBlue
                                : black ?
                                    buttonContainerBlack
                                    : buttonContainer}>
                            <Text style={{ ...description, color: '#fff' }}>
                                {children}
                            </Text>
                        </View>
                    </TouchableOpacity>}
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    contaienr: {
        width: '100%'
    },

    buttonContainer: {
        backgroundColor: '#ba2a4d',
        padding: 15
    },

    buttonContainerBlue: {
        backgroundColor: '#004c98',
        padding: 15
    },

    buttonContainerBlack: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5
    },

    description: {
        fontSize: 16,
        alignSelf: 'center'
    },

    buttonContainerTransparent: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#fff'
    }
});

export default CustomButton;