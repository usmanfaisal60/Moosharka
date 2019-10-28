import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Aux from '../HOC/AUX/Aux';
import BottomNavigator from './Helpers/BottomNavigator';
import { setCrossListener } from '../../Redux/Actions';
import { connect } from 'react-redux';
import CustomHeader from './Helpers/CustomHeader';
import constants from '../../constants';
import ViewPager from '@react-native-community/viewpager';
import Activity from './Helpers/Activity';
import Booked from './Helpers/Booked';
import History from './Helpers/History';


class Trips extends React.Component {

    render() {

        const {
            container,
            imageContainer,
            imageStyle,
            mainContainer,
            pagerContainer
        } = Styles;

        const {
            trips
        } = this.props;

        return (
            <Aux>
                <View style={container}>
                    <CustomHeader>Trips </CustomHeader>
                    {!trips ?
                        <Aux>
                            <View style={imageContainer}>
                                <Image style={imageStyle} source={require('../../Assets/Icons/trips.png')} />
                            </View>
                            <Text>
                                No trips yet
                            </Text>
                        </Aux>
                        :
                        <View style={mainContainer}>
                            <View style={pagerContainer}>
                                <ViewPager set>
                                    <Activity />
                                    <Booked />
                                    <History />
                                </ViewPager>
                            </View>
                        </View>
                    }
                </View>
                <BottomNavigator
                    navigation={this.props.navigation}
                    active='Trips' />
            </Aux>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        width: '100%',
        height: '100%',
        opacity: 0.5
    },

    mainContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        paddingTop: constants.headerHeight,
        paddingBottom: constants.bottomTabHeight,
    },

    pagerContainer: {
        width: '100%',
        height: '100%'
    }
});

const mapStateToProps = state => {
    return {
        ...state.trips
    }
}

export default connect(mapStateToProps, { setCrossListener })(Trips);