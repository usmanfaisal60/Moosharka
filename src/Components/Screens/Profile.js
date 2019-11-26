import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import CustomListItem from './Helpers/CustomListItem';
import { attemptLogout } from '../../Redux/Actions';
import { connect } from 'react-redux';

class Profile extends React.Component {

    render() {
        const {
            container,
            header,
            picStyle
        } = Styles;

        const {
            navigation,
            loginStatus,
            attemptLogout
        } = this.props;

        return (
            <Aux>
                <View style={container}>
                    <StatusBar backgroundColor='#000' barStyle='light-content' />
                    <View style={header}>
                        <Image style={picStyle} resizeMode='contain' source={require('../../Assets/Icons/moosharka.png')} />
                    </View>
                    <CustomListItem
                        onPress={() => {
                            if (!loginStatus) navigation.navigate('LoginOrSignUp');
                            else navigation.navigate('AccountScreen');
                        }}
                        >
                        Account
                    </CustomListItem>
                    <CustomListItem
                        onPress={() => {
                            if (!loginStatus) navigation.navigate('LoginOrSignUp');
                            else navigation.navigate('LikedCars');
                        }}
                        bottomBorder>
                        Liked cars
                    </CustomListItem>
                    <CustomListItem>How Ejaroo works</CustomListItem>
                    <CustomListItem>Contact supprt</CustomListItem>
                    <CustomListItem bottomBorder>Legal</CustomListItem>
                    {loginStatus ? <CustomListItem onPress={() => attemptLogout()}>Log out</CustomListItem> : null}
                </View>
                <BottomNavigator
                    navigation={this.props.navigation}
                    active='Profile' />
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#222'
    },

    header: {
        width: '100%',
        height: 120,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    picStyle: {
        width: '60%',
        marginLeft: 20
    }
});

const mapStateToProps = state => {
    return {
        ...state.login,
        ...state.loader
    }
}

export default connect(mapStateToProps, { attemptLogout })(Profile);