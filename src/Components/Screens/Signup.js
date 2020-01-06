import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import Header from './Helpers/CustomHeader';
import CustomButton from './Helpers/CustomButton';
import { setCredentials, resetLoginState, attemptSignup, clearError } from '../../Redux/Actions';
import { connect } from 'react-redux';
import constants from '../../constants';
import FullScreenModal from './Helpers/FullScreenModal';
import Aux from '../HOC/Auxiliary';


class Signup extends React.Component {

    componentWillUnmount() {
        this.props.resetLoginState();
    }

    componentDidUpdate() {
        const {
            navigation,
            error,
            clearError
        } = this.props;

        console.log(error);

        if (error) {
            if (error.title === 'Success') {
                Alert.alert(error.title, error.message, [
                    {
                        text: 'Ok', onPress: () => { clearError(); navigation.popToTop(); }
                    }
                ]);
            }
            else Alert.alert(error.title, error.message, [
                {
                    text: 'Ok', onPress: clearError
                }
            ]);
        }
    }

    render() {

        const {
            container,
            inputFields,
            inputField,
        } = Styles;

        const {
            email,
            navigation,
            username,
            password,
            setCredentials,
            loader,
            attemptSignup,
            cPassword
        } = this.props;

        const {
            set_user,
            set_pass,
            set_email,
            set_confirm_pass
        } = constants.red_types
        return (
            <Aux>
                <ImageBackground style={container} source={require('../../Assets/Images/fsd.jpg')}>
                    <Header backbutton lefticon='back' onPressLeft={() => navigation.goBack()}>Sign up for Ejaroo</Header>
                    <View style={inputFields}>
                        <TextInput
                            value={email}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='Email'
                            textContentType='emailAddress'
                            keyboardType='email-address'
                            onChangeText={(text) => {
                                setCredentials(set_email, text)
                            }} />
                        <TextInput
                            value={username}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='User name'
                            onChangeText={(text) => {
                                setCredentials(set_user, text)
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
                        <TextInput
                            value={cPassword}
                            style={inputField}
                            secureTextEntry
                            placeholderTextColor='#fffa'
                            placeholder='Confirm password'
                            onChangeText={(text) => {
                                setCredentials(set_confirm_pass, text)
                            }} />
                    </View>
                    <View style={{ width: '85%' }}>
                        <CustomButton blue onPress={attemptSignup.bind(this, email, username, password, cPassword)}>Register</CustomButton>
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
    },

    inputFields: {
        marginTop: '5%',
        width: '80%'
    },

    inputField: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        padding: Platform.OS === 'ios' ? 10 : 3,
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

export default connect(mapStateToProps, { setCredentials, resetLoginState, attemptSignup, clearError })(Signup);