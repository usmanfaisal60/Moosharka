import React from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, Dimensions, Alert, Platform } from 'react-native';
import Header from './Helpers/CustomHeader';
import CustomButton from './Helpers/CustomButton';
import { setCredentials, resetLoginState, attemptLogin, clearError } from '../../Redux/Actions';
import { connect } from 'react-redux';
import constants from '../../constants';
import FullScreenModal from './Helpers/FullScreenModal';
import Aux from '../HOC/AUX/Aux';


class Login extends React.Component {

    componentWillUnmount() {
        this.props.resetLoginState();
    }

    componentDidUpdate() {
        const {
            loginStatus,
            navigation,
            error,
            clearError
        } = this.props;

        if (loginStatus) {
            navigation.popToTop();
        }

        console.log(error);

        if (error) {
            Alert.alert(error.title, error.message, [
                {
                    text: 'Ok', onPress: clearError
                }
            ]);
        }
    }

    render() {

        const {
            bgcontainer,
            container,
            inputFields,
            inputField,
            buttonsContainer
        } = Styles;

        const {
            navigation,
            email,
            password,
            setCredentials,
            loader,
            attemptLogin
        } = this.props;

        const {
            set_email,
            set_pass
        } = constants.red_types
        return (
            <Aux>
                <ImageBackground style={container} source={require('../../Assets/Images/fsd.jpg')}>
                    <Header backbutton lefticon='back' onPressLeft={() => navigation.goBack()}>Sign up for Moosharka</Header>
                    <View style={inputFields}>
                        <TextInput
                            value={email}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='Username or email'
                            onChangeText={(text) => {
                                setCredentials(set_email, text)
                            }} />
                        <TextInput
                            value={password}
                            secureTextEntry
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='Password'
                            onChangeText={(text) => {
                                setCredentials(set_pass, text)
                            }} />
                    </View>
                    <View style={{ width: '85%' }}>
                        <CustomButton onPress={() => attemptLogin(email, password)}>Login</CustomButton>
                    </View>
                </ImageBackground>
                {loader ? <FullScreenModal loader /> : null}
            </Aux>
        )
    }
};

const window = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height,
        alignItems: 'center',
        paddingTop: constants.headerHeight + 30
    },

    inputFields: {
        width: '80%'
    },

    inputField: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        padding: Platform.OS === 'ios' ? 10 : 0,
        fontSize: 18,
        color: '#fff',
        marginBottom: 15
    }
});

const mapStateToProps = state => {
    return {
        ...state.login,
        ...state.loader
    }
}

export default connect(mapStateToProps, { setCredentials, resetLoginState, attemptLogin, clearError })(Login);