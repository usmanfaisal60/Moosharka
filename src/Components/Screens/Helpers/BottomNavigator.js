import React from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';
import { connect } from 'react-redux';


const BottomNavigator = props => {

    const {
        container
    } = Styles;

    const {
        navigation,
        active,
        loginStatus
    } = props;

    return (
        <View style={container}>
            <BottomButton
                icon='Search' active={active}
                onPress={() => navigation.replace('Search')}>
                Search
            </BottomButton>
            <BottomButton
                icon='Trips' active={active}
                onPress={() => {
                    if (loginStatus) navigation.replace('Trips')
                    else navigation.navigate('LoginOrSignUp')
                }}>
                Trips
            </BottomButton>
            <BottomButton
                icon='Messages' active={active}
                onPress={() => {
                    if (loginStatus) navigation.replace('Messages')
                    else navigation.navigate('LoginOrSignUp')
                }}>
                Messages
            </BottomButton>
            <BottomButton
                icon='Host' active={active}
                onPress={() => navigation.replace('Host')}>
                Host
            </BottomButton>
            <BottomButton
                icon='Profile' active={active}
                onPress={() => navigation.replace('Profile')}>
                Profile
            </BottomButton>
        </View>
    )
};

const iconSize = 40;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#222',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonImage: {
        flex: 2,
        width: iconSize,
        height: iconSize
    },

    buttonText: {
        flex: 1,
        color: '#fff'
    },

    buttonTextHilighted: {
        flex: 1,
        color: '#62ffc5'
    }
});

const icons = {
    Host: require('../../../Assets/Icons/WhiteIcons/Host.png'),
    Messages: require('../../../Assets/Icons/WhiteIcons/Message.png'),
    Profile: require('../../../Assets/Icons/WhiteIcons/Profile.png'),
    Search: require('../../../Assets/Icons/WhiteIcons/Search.png'),
    Trips: require('../../../Assets/Icons/WhiteIcons/Trips.png'),
    HostGreen: require('../../../Assets/Icons/WhiteIcons/HostGreen.png'),
    MessagesGreen: require('../../../Assets/Icons/WhiteIcons/MessageGreen.png'),
    ProfileGreen: require('../../../Assets/Icons/WhiteIcons/ProfileGreen.png'),
    SearchGreen: require('../../../Assets/Icons/WhiteIcons/SearchGreen.png'),
    TripsGreen: require('../../../Assets/Icons/WhiteIcons/TripsGreen.png')
}
const BottomButton = props => {

    const {
        buttonContainer,
        buttonText,
        buttonTextHilighted,
        buttonImage
    } = Styles;


    return (
        Platform.OS === 'android' ?
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff')} onPress={props.onPress}>
                <View style={buttonContainer}>
                    <Image style={buttonImage} source={icons[props.icon + (props.active === props.icon ? 'Green' : '')]} />
                    <Text style={props.active === props.icon ? buttonTextHilighted : buttonText}>{props.children}</Text>
                </View>
            </TouchableNativeFeedback>
            :
            <TouchableWithoutFeedback background={TouchableNativeFeedback.Ripple('#fff')} onPress={props.onPress}>
                <View style={buttonContainer}>
                    <Image style={buttonImage} source={icons[props.icon + (props.active === props.icon ? 'Green' : '')]} />
                    <Text style={props.active === props.icon ? buttonTextHilighted : buttonText}>{props.children}</Text>
                </View>
            </TouchableWithoutFeedback>
    )
}

const mapStateToProps = state => {
    return {
        ...state.login
    }
}

export default connect(mapStateToProps)(BottomNavigator);