import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
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
            markerStyle
        } = Styles;

        const {
            navigation,
            searchResults,
            id,
            topLocations
        } = this.props;

        if (id !== -1) {
            const selectedCity = topLocations.find(el => el.id === id);

            console.log(selectedCity);

            this.state.initialRegion = {
                latitude: parseFloat(selectedCity.map_lat),
                longitude: parseFloat(selectedCity.map_lng),
                latitudeDelta: 0.1,
                longitudeDelta: 0.0421,
            }
        }

        console.log(searchResults);

        return (
            <View style={container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={mapStyle}
                    initialRegion={this.state.initialRegion}
                    reigion={this.state.reigion}
                >
                    {searchResults.map(el => {
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
                <SelectionMenu leftText='Table' onPressLeft={navigation.goBack} />
            </View>
        )
    }
}

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