import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';
import CustomButton from './Helpers/CustomButton';
import BottomNavigator from './Helpers/BottomNavigator';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';
import Aux from '../HOC/Auxiliary';

class Host extends React.Component {

    render() {

        const {
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
            <Aux>
                <CustomHeader>List your car</CustomHeader>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image style={ImageBackgroundContainer} resizeMode='cover' source={require('../../Assets/Images/listyourcar.jpg')} />
                    <Image resizeMode='contain' style={moosharkaIcon} source={require('../../Assets/Images/ejaroo-logo.png')} />
                    <Text style={description}>
                        Listing your car is easy and it would take only about 10 minutes
                    </Text>
                    <View style={buttonsContainer}>
                        <CustomButton onPress={() => {
                            navigation.navigate('ListYourCar');
                        }}>Get started</CustomButton>
                    </View>
                </View>
                <BottomNavigator
                    navigation={navigation}
                    active='Host' />
            </Aux>
        );
    }
}

const Styles = StyleSheet.create({

    ImageBackgroundContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'absolute'
    },

    moosharkaIcon: {
        width: '70%',
        height: 70,
        marginTop: '20%',
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