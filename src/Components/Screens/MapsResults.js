import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class MapsResults extends React.Component {
    render() {

        const {
            container,
            mapStyle
        } = Styles;

        return (
            <View style={container}>
                <MapView style={mapStyle}/>
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
    }
});

export default MapsResults;