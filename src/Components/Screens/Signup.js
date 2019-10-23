import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Dimensions } from 'react-native';
import Header from './Helpers/CustomHeader';
import CustomButton from './Helpers/CustomButton';
import { setCredentials, resetLoginState, attemptSignup } from '../../Redux/Actions';
import { connect } from 'react-redux';
import constants from '../../constants';
import FullScreenModal from './Helpers/FullScreenModal';
import Aux from '../HOC/AUX/Aux';


class Signup extends React.Component {

    componentWillUnmount() {
        this.props.resetLoginState();
    }

    componentDidUpdate() {
        const {
            signupStatus,
            navigation
        } = this.props;

        if (signupStatus) {
            setTimeout(() => {
                navigation.goBack();
            }, 500);
        }
    }

    render() {

        const {
            container,
            inputFields,
            inputField,
        } = Styles;

        const {
            navigation,
            username,
            password,
            setCredentials,
            loader,
            attemptSignup,
            phoneNum
        } = this.props;

        const {
            set_user,
            set_pass,
            set_phnum
        } = constants.red_types
        return (
            <Aux>
                <ImageBackground style={container} source={require('../../Assets/Images/fsd.jpg')}>
                    <Header backbutton lefticon='back' onPressLeft={() => navigation.goBack()}>Sign up for Moosharka</Header>
                    <View style={inputFields}>
                        <TextInput
                            value={username}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='Username or email'
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
                            value={phoneNum}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='Phone'
                            textContentType='telephoneNumber'
                            onChangeText={(text) => {
                                setCredentials(set_phnum, text)
                            }} />
                    </View>
                    <View style={{ width: '85%' }}>
                        <CustomButton blue onPress={() => attemptSignup(username, password)}>Register</CustomButton>
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

export default connect(mapStateToProps, { setCredentials, resetLoginState, attemptSignup })(Signup);