import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions';
import constants from '../../constants';

class PickCarLocation extends React.Component {

    state = {
        initialRegion: null,
        mapHasLoaded: false,
        markerLocation: null
    }

    componentDidMount() {
        const {
            navigation
        } = this.props;

        const city = JSON.parse(navigation.getParam('city'));
        const initialRegion = {
            latitude: parseFloat(city.map_lat),
            longitude: parseFloat(city.map_lng),
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
        }
        this.setState({ initialRegion });
        this.setState({ markerLocation: initialRegion });
    }

    render() {

        const {
            container,
            mapStyle,
            selectorView,
            markerStyle,
            controlsContainer,
            buttonStyle
        } = Styles;

        const {
            initialRegion,
            markerLocation
        } = this.state;

        const {
            navigation,
            setCarCredential
        } = this.props;

        const {
            set_car_location,
        } = constants.red_types;

        return (
            <View style={container}>
                <MapView
                    onRegionChange={e => this.setState({ markerLocation: e })}
                    onMapReady={() => this.setState({ mapHasLoaded: true })}
                    initialRegion={initialRegion ? initialRegion : null}
                    style={mapStyle}>
                    {initialRegion && markerLocation ?
                        <Marker
                            coordinate={markerLocation} >
                            <Image
                                style={markerStyle}
                                source={require('../../Assets/Icons/map-pin.png')} />
                        </Marker>
                        :
                        null
                    }
                </MapView>
                <View style={selectorView}>
                    <Text style={{ color: '#fff' }}>Please select a location on the map</Text>
                    <View style={controlsContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                setCarCredential(set_car_location, this.state.markerLocation)
                                navigation.goBack();
                            }}
                            activeOpacity={0.6}
                            style={{ ...buttonStyle, margin: 10 }}>
                            <Image
                                style={buttonStyle}
                                resizeMode='contain'
                                source={require('../../Assets/Icons/ok-logo.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.goBack()}
                            style={{ ...buttonStyle, margin: 10 }}>
                            <Image
                                style={buttonStyle}
                                resizeMode='contain'
                                source={require('../../Assets/Icons/cancel-logo.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const markerSize = 30;
const imageSize = 40;


const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    mapStyle: {
        width: '100%',
        flex: 1
    },

    selectorView: {
        width: '100%',
        height: '20%',
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center'
    },

    markerStyle: {
        width: markerSize,
        height: markerSize
    },

    controlsContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    buttonStyle: {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        overflow: 'hidden',
    }
});

const mapStateToProps = state => {
    return {
        ...state.search
    }
}

export default connect(mapStateToProps, actions)(PickCarLocation);