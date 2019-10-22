import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';
import CustomButton from './Helpers/CustomButton';
import BottomNavigator from './Helpers/BottomNavigator';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';

class Host extends React.Component {

    render() {

        const {
            container,
            ImageBackgroundContainer,
            moosharkaIcon,
            buttonsContainer,
            description
        } = Styles;

        const {
            navigation,
            loginStatus
        } = this.props;
        return (
            <View style={container}>
                <ImageBackground style={ImageBackgroundContainer} resizeMode='cover' source={require('../../Assets/Images/listyourcar.jpg')}>
                    <CustomHeader>List your car</CustomHeader>
                    <Image resizeMode='contain' style={moosharkaIcon} source={require('../../Assets/Icons/moosharka.png')} />
                    <Text style={description}>
                        Listing your car is easy and it would take only about 10 minutes
                    </Text>
                    <View style={buttonsContainer}>
                        <CustomButton onPress={() => {
                            if (loginStatus) {
                                // navigation.navigate('LoginOrSignUp')
                            } else {
                                navigation.navigate('ListYourCar')
                            }
                        }}>Get started</CustomButton>
                    </View>
                </ImageBackground>
                <BottomNavigator
                    navigation={navigation}
                    active='Host' />
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
        height: 70,
        marginTop: '30%',
    },

    buttonsContainer: {
        width: '100%',
        position: 'absolute',
        bottom: '12%'
    },

    description: {
        color: '#fff',
        padding: 20,
        textAlign: 'center'
    }
});

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps)(Host);