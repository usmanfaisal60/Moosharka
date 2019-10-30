import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import SelectionMenu from './Helpers/SelectionMenu';
import { connect } from 'react-redux';

class MapsResults extends React.Component {

    state = {
        initialRegion: {
            latitude: 25.21,
            longitude: 55.2708,
            latitudeDelta: 0.1,
            longitudeDelta: 0.0421,
        },

    }

    // setReigion(reigion) {
    //     this.setState({ reigion });
    // }

    render() {

        const {
            container,
            mapStyle,
            markerStyle
        } = Styles;

        const {
            navigation,
            searchResults
        } = this.props;

        return (
            <View style={container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={mapStyle}
                    initialRegion={this.state.initialRegion}
                    reigion={this.state.reigion}
                // onRegionChange={this.setReigion.bind(this)}
                >
                    {searchResults.map(el => {
                        // console.log('object is located at ' + el.location.longitude + 'longitude and ' + el.location.latitude + ' latitude');
                        return (
                            <Marker coordinate={el.location}>
                                <Image style={markerStyle} source={require('../../Assets/Icons/Host.png')} />
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
    }
}

export default connect(mapStateToProps)(MapsResults);