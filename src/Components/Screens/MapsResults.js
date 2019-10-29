import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MapsResults extends React.Component {
    render() {

        const {
            container
        } = Styles;

        return (
            <View style={container}>
                <Text>Maps screen</Text>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default MapsResults;