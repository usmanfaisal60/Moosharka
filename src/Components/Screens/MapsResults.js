import React from 'react';
import { View, Image, StyleSheet, Dimensions, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import SelectionMenu from './Helpers/SelectionMenu';
import { connect } from 'react-redux';

class MapsResults extends React.Component {

    state = {
        initialRegion: {
            latitude: 33.738045,
            longitude: 73.084488,
            latitudeDelta: 1000,
            longitudeDelta: 1000,
        },

    }

    render() {

        const {
            container,
            mapStyle,
            markerStyle,
            backButtonContainer,
            backInageContainer
        } = Styles;

        const {
            navigation,
            searchResults,
            id,
            topLocations
        } = this.props;

        if (id !== -1) {
            const selectedCity = topLocations.find(el => el.id === id);

            this.state.initialRegion = {
                latitude: parseFloat(selectedCity.map_lat),
                longitude: parseFloat(selectedCity.map_lng),
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
            }
        }

        return (
            <View style={container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={mapStyle}
                    initialRegion={this.state.initialRegion}
                    reigion={this.state.reigion}
                >
                    {searchResults.result.map(el => {
                        return (
                            <Marker
                                key={el.id}
                                coordinate={{
                                    latitude: el.lat,
                                    longitude: el.lng
                                }}>
                                <Image
                                    style={markerStyle}
                                    source={require('../../Assets/Icons/Host.png')}
                                    resizeMode='contain' />
                            </Marker>
                        );
                    })}
                </MapView>
                <View style={backButtonContainer}>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                            <View style={backInageContainer}>
                                <Image
                                    style={{ width: '80%', height: '80%' }}
                                    resizeMode='contain'
                                    source={require('../../Assets/Icons/back.png')} />
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
                            <View style={backInageContainer}>
                                <Image
                                    style={{ width: '80%', height: '80%' }}
                                    resizeMode='contain'
                                    source={require('../../Assets/Icons/back.png')} />
                            </View>
                        </TouchableOpacity>
                    }
                </View>
                <SelectionMenu leftText='Table' onPressLeft={navigation.goBack} />
            </View>
        )
    }
}

const buttonSize = 40;

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    mapStyle: {
        width: '100%',
        height: '100%'
    },

    markerStyle: {
        width: 30,
        height: 30
    },

    backButtonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 20,
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
        overflow: 'hidden'
    },

    backInageContainer: {
        width: buttonSize,
        height: buttonSize,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        ...state.search,
        ...state.dashboard,
        ...state.login
    }
}

export default connect(mapStateToProps)(MapsResults);