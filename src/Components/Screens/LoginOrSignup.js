import React from 'react';
import { View, Image, ImageBackground, StatusBar, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import CustomButton from './Helpers/CustomButton';


class LoginOrSignUp extends React.Component {

    render() {

        const {
            container,
            ImageBackgroundContainer,
            moosharkaIcon,
            buttonsContainer,
            backButtonContainer,
            crossIcon,
            backButtonTouchContainer
        } = Styles;

        const {
            navigation,
        } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor='#000' barStyle='light-content' />
                <ImageBackground style={ImageBackgroundContainer} source={require('../../Assets/Images/fsd.jpg')}>
                    <View style={backButtonTouchContainer}>
                        {Platform.OS === 'android' ?
                            <TouchableNativeFeedback
                                onPress={() => {
                                    navigation.goBack();
                                }}
                                background={TouchableNativeFeedback.Ripple('#fff')}>
                                <View style={backButtonContainer}>
                                    <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                                </View>
                            </TouchableNativeFeedback>
                            :
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack();
                                }}
                                background={TouchableNativeFeedback.Ripple('#fff')}>
                                <View style={backButtonContainer}>
                                    <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    <Image resizeMode='contain' style={moosharkaIcon} source={require('../../Assets/Images/ejaroo-logo.png')} />
                    <View style={buttonsContainer}>
                        <CustomButton onPress={() => navigation.navigate('Signup')}>Sign up</CustomButton>
                        <CustomButton onPress={() => navigation.navigate('Login')} transparent>Login</CustomButton>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    contaienr: {
        width: '100%',
        height: '100%'
    },

    ImageBackgroundContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    moosharkaIcon: {
        width: '70%',
        marginTop: '30%'
    },

    buttonsContainer: {
        width: '100%',
        position: 'absolute',
        bottom: '20%'
    },

    backButtonContainer: {
        width: 40,
        height: 40,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButtonTouchContainer: {
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 0,
        borderRadius: 20,
        width: 40,
        height: 40,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

    crossIcon: {
        width: 20,
        height: 20,
    }
});

export default LoginOrSignUp;