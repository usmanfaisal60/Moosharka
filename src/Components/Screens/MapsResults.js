import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


class MapsResults extends React.Component {

    state = {
        initialRegion: {
            latitude: 25.21,
            longitude: 55.2708,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },

        reigion: {

        },

    }

    setReigion(reigion) {
        this.setState({ reigion });
    }

    componentDidUpdate() {
        console.log(this.state.reigion);
    }

    render() {

        const {
            container,
            mapStyle,
            markerStyle
        } = Styles;

        return (
            <View style={container}>
                <MapView
                    style={mapStyle}
                    initialRegion={this.state.initialRegion}
                    reigion={this.state.reigion}
                    onRegionChange={this.setReigion.bind(this)}>
                    <Marker coordinate={this.state.initialRegion}>
                        <Image style={markerStyle} source={require('../../Assets/Icons/Host.png')} />
                    </Marker>
                </MapView>
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

export default MapsResults;