import React from 'react';
import { View, ImageBackground, TextInput, StyleSheet, Dimensions } from 'react-native';
import Header from './Helpers/CustomHeader';
import CustomButton from './Helpers/CustomButton';
import { setCredentials, resetLoginState, attemptLogin } from '../../Redux/Actions';
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
            navigation
        } = this.props;

        if (loginStatus) {
            setTimeout(() => {
                navigation.popToTop();
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
            attemptLogin
        } = this.props;

        const {
            set_user,
            set_pass
        } = constants.red_types
        return (
            <Aux>
                <ImageBackground style={container} source={require('../../Assets/Images/fsd.jpg')}>
                    <Header backbutton lefticon='back' onPressLeft={() => navigation.goBack()}>Login to Moosharka</Header>
                    <View style={inputFields}>
                        <TextInput
                            value={username}
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='username or email'
                            onChangeText={(text) => {
                                setCredentials(set_user, text)
                            }} />
                        <TextInput
                            value={password}
                            secureTextEntry
                            style={inputField}
                            placeholderTextColor='#fffa'
                            placeholder='password'
                            onChangeText={(text) => {
                                setCredentials(set_pass, text)
                            }} />
                    </View>
                    <View style={{ width: '80%' }}>
                        <CustomButton onPress={() => attemptLogin(username, password)}>Login</CustomButton>
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
        paddingTop: 100
    },

    inputFields: {
        width: '80%'
    },

    inputField: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
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

export default connect(mapStateToProps, { setCredentials, resetLoginState, attemptLogin })(Login);