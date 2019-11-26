import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import CustomHeader from './Helpers/CustomHeader';
import { connect } from 'react-redux';
import constants from '../../constants';


class ListCar extends React.Component {
    render() {

        const {
            container,
            outerContainer
        } = Styles;

        const {
            navigation
        } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor='#222' barStyle='light-content' />
                <CustomHeader
                    backbutton
                    onPressLeft={() => {
                        navigation.goBack();
                    }}>List your car</CustomHeader>
                <View style={outerContainer}>
                    <View style={container}>
                        
                    </View>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    outerContainer: {
        paddingTop: constants.headerHeight,
        width: '100%',
        height: '100%'
    }


});

const mapStateToProps = state => {
    return {
        ...state.loader,
    }
}

export default connect(mapStateToProps)(ListCar);