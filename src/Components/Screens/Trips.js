import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';
import Aux from '../HOC/Auxiliary';
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
    constructor(props) {
        super(props);
        this.viewPager = React.createRef();
        this.state = {
            currentPage: 0
        }
    }

    go(pageNumber) {
        this.viewPager.current.setPage(pageNumber);
    }

    render() {

        const {
            container,
            imageContainer,
            imageStyle,
            mainContainer,
            pagerContainer,
            tripsButtonsContainer
        } = Styles;

        const {
            activity,
            booked,
            loader
        } = this.props;

        return (
            <Aux>
                <CustomHeader>Trips </CustomHeader>
                <View style={container}>
                    <View style={tripsButtonsContainer}>
                        <Button active={this.state.currentPage === 0} onPress={this.go.bind(this, 0)}>
                            Activity
                        </Button>
                        <Button active={this.state.currentPage === 1} onPress={this.go.bind(this, 1)}>
                            Booked
                        </Button>
                        <Button active={this.state.currentPage === 2} onPress={this.go.bind(this, 2)}>
                            History
                        </Button>
                    </View>
                    <View style={pagerContainer}>
                        <ViewPager
                            ref={this.viewPager}
                            onPageSelected={(e) => this.setState({ currentPage: e.nativeEvent.position })}
                            style={{ width: '100%', height: '100%' }}>
                            <View style={{ width: '100%', height: '100%' }}>
                                <Activity />
                            </View>
                            <View style={{ width: '100%', height: '100%' }}>
                                <Booked />
                            </View>
                            <View style={{ width: '100%', height: '100%' }}>
                                <History />
                            </View>
                        </ViewPager>
                    </View>
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
        flex: 1,
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
        flex: 1
    },

    pagerContainer: {
        width: '100%',
        height: '100%'
    },

    tripsButtonsContainer: {
        width: '100%',
        height: constants.tripsButtonsHeight,
        backgroundColor: '#222',
        flexDirection: 'row'
    },

    touchContainer: {
        height: '100%',
        flex: 1,
    },

    touchable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 15
    }
});

const mapStateToProps = state => {
    return {
        ...state.trips,
    }
}

export default connect(mapStateToProps, { setCrossListener })(Trips);

const Button = props => {

    const {
        touchContainer,
        touchable,
        buttonText
    } = Styles;

    const {
        onPress,
        active
    } = props;

    return (
        <View
            style={{
                ...touchContainer,
                borderBottomColor: active ? '#fff' : null,
                borderBottomWidth: active ? 2 : null
            }}>
            {Platform.OS === 'android' ?
                <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#fff')}>
                    <View style={touchable}>
                        <Text style={buttonText}>
                            {props.children}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                :
                <TouchableHighlight onPress={onPress}>
                    <View style={touchable}>
                        <Text style={buttonText}>
                            {props.children}
                        </Text>
                    </View>
                </TouchableHighlight>
            }
        </View>
    )
}