import React from 'react';
import { View, Image, ImageBackground, StatusBar, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import CustomButton from './Helpers/CustomButton';
import { crossPressed } from '../../Redux/Actions';
import { connect } from 'react-redux';


class LoginOrSignUp extends React.Component {

    componentDidMount() {
        const {
            navigation
        } = this.props;

        this.FocusEvent = navigation.addListener('didFocus', () => {
            this.forceUpdate();
        });
    }

    componentDidUpdate() {
        const {
            navigation,
            loginStatus
        } = this.props;

    }

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
            crossPressed
        } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor='#000' barStyle='light-content' />
                <ImageBackground style={ImageBackgroundContainer} source={require('../../Assets/Images/fsd.jpg')}>
                    <View style={backButtonTouchContainer}>
                        {Platform.OS === 'android' ?
                            <TouchableNativeFeedback
                                onPress={() => {
                                    crossPressed(true);
                                    navigation.goBack();
                                }}
                                background={TouchableNativeFeedback.Ripple('#fff')}>
                                <View style={backButtonContainer}>
                                    <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                                </View>
                            </TouchableNativeFeedback>
                            :
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                background={TouchableNativeFeedback.Ripple('#fff')}>
                                <View style={backButtonContainer}>
                                    <Image resizeMode='contain' style={crossIcon} source={require('../../Assets/Icons/WhiteIcons/cross.png')} />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                    <Image resizeMode='contain' style={moosharkaIcon} source={require('../../Assets/Icons/moosharka.png')} />
                    <View style={buttonsContainer}>
                        <CustomButton >Sign up</CustomButton>
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

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps, { crossPressed })(LoginOrSignUp);